<template>
    <v-container>
        <v-overlay :model-value="isLoading" class="d-flex justify-center align-center" persistent>
            <v-progress-circular indeterminate size="64" color="primary" />
        </v-overlay>
        <v-row>
            <v-col cols="12" md="6">
                <v-btn
                    class="bg-blue-grey-lighten-1"
                    @click="userList()">
                    {{ Users.length === 0 ? 'Cargar Listado de Usuarios' : 'Recargar Listado' }}
                </v-btn>
            </v-col>
        </v-row>
        <v-row class="d-flex justify-center">
            <user-modal v-model="modalVisible" title="Detalles del Usuario">
                <template v-slot:body>
                    <user-card :user="User" :disabled="true" />
                </template>
            </user-modal>
            <v-col cols="auto" class="rounded-lg">
                <SearchBar v-if="Users.length > 0" v-model="search" label="Buscar usuario" />
                <v-table 
                    density="compact" 
                    fixed-header 
                    theme="light"
                    class="responsive-table"
                    >
                    <thead>
                        <tr>
                            <th v-for="col in cols" :key="col.key">
                                {{ col.title }}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in filteredUsers" v-if="filteredUsers.length > 0" :key="user.id">
                            <td><v-avatar image="../assets/avatar.webp" size="68"></v-avatar></td>
                            <td>{{ user.name }}</td>
                            <td>{{ user.email }}</td>
                            <td>
                                <v-btn @click="detailsUser(user.id)" size="small" round color="blue-grey-lighten-5">
                                    <v-icon>
                                        mdi-account
                                    </v-icon>
                                    <v-tooltip activator="parent" location="end">Ver Detalles</v-tooltip>
                                </v-btn>
                            </td>
                        </tr>
                        <tr v-else>
                            <td class="text-center text-grey" :colspan="cols.length">
                             No hay usuarios para mostrar.
                            </td>
                        </tr>
                    </tbody>
                </v-table>
            </v-col>
        </v-row>
    </v-container>

</template>

<script lang="ts">
import { computed, defineComponent, ref} from 'vue'
import { getUsers, type User, getUserById } from '../services/userService'
import { useLoading } from '../services/loaderService'

export default defineComponent({
    setup() {
        const modalVisible = ref(false)
        const Users = ref<any[]>([])
        const search = ref('')
        const cols = ref([
            { title: 'Avatar', key: 'avatar' },
            { title: 'Nombre Completo', key: 'name' },
            { title: 'Correo Electrónico', key: 'email' },
            { title: 'Acciones', key: 'actions' },
        ])
        const User = ref<User>({} as User)
        const { isLoading, startLoading, stopLoading } = useLoading()

        const userList = async (): Promise<void> => {
            try {
                startLoading()
                Users.value = await getUsers()
            } catch (error) {
                console.error(error)
            } finally {
                stopLoading()
            }
        }

        const detailsUser = async (id: number): Promise<void> => {
            try {
                startLoading()
                const response = await getUserById(id)
                User.value = response
                if (!modalVisible.value) modalVisible.value = true
            } catch (error) {
                console.error(error);
            } finally {
                stopLoading()
            }
        }

        const filteredUsers = computed(() => {
            if (!search.value) return Users.value
            return Users.value.filter(user =>
                (user.name + user.email)
                    .toLowerCase()
                    .includes(search.value.toLowerCase()),
            )
        })

        return {
            Users,
            userList,
            detailsUser,
            isLoading,
            modalVisible,
            User,
            search,
            filteredUsers,
            cols,
        }
    }
})
</script>

<style lang="scss">
.responsive-table {
  max-height: 50vh;
  overflow-y: auto;
}

@media (max-width: 600px) {
  .responsive-table {
    max-height: 80vh;
  }
}
</style>