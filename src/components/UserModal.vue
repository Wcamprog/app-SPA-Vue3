<template>
    <v-dialog v-model="modalVisible" max-width="700px" persistent>
        <v-card rounded="xl">
            <v-card-title v-if="title || $slots.header" class="bg-blue-grey-lighten-1">
                <slot name="title">
                    <v-row class="d-flex justify-space-between">
                        <v-col  class="d-flex align-center justify-center" cols="auto">
                            <span class="text-h6">{{ title }}</span>
                        </v-col>
                        <v-col class="d-flex align-center justify-end" cols="auto">
                            <v-btn class="float-right" icon variant="plain" @click="closeModal">
                                <v-icon color="grey-darken-4">mdi-close</v-icon>
                            </v-btn>
                            <v-dialog v-model="confirmDialog" max-width="400" persistent>
                                <v-card rounded="lg">
                                    <v-card-title class="text-h6 pb-1 pt-1 bg-blue-grey-lighten-4">¿Estás seguro de cerrar esta ventana?</v-card-title>
                                    <v-card-actions>
                                        <v-row>
                                            <v-col class="d-flex justify-space-between bg-blue-grey-lighten-4" cols="12">
                                                <v-btn color="blue-grey-darken-4" variant="text" @click="cancelClose">Cancelar</v-btn>
                                                <v-btn color="red-darken-1" variant="text" @click="confirmClose">Cerrar</v-btn>
                                            </v-col>
                                        </v-row>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-col>
                    </v-row>
                </slot>
            </v-card-title>
            <v-card-text class="bg-blue-grey-lighten-2">
                <slot name="body" />
            </v-card-text>

            <v-card-actions v-if="$slots.footer" class="bg-blue-grey-lighten-1">
                <slot name="footer" />
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script lang="ts">
  import { computed, defineComponent, ref } from 'vue'

  export default defineComponent({
    name: 'userModal',
    props: {
        modelValue: {
            type: Boolean,
            required: true,
        },
        title: {
            type: String,
            default: '',
        },

    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
        const modalVisible = computed({
            get: () => props.modelValue,
            set: (value) => emit('update:modelValue', value)
        })

        const confirmDialog = ref<boolean>(false)

        const closeModal = () => {
            confirmDialog.value = true
        }

        const confirmClose = () => {
            modalVisible.value = false
            confirmDialog.value = false
        }

        const cancelClose = () => {
            confirmDialog.value = false
        }

        return {
            modalVisible,
            confirmDialog,
            closeModal,
            confirmClose,
            cancelClose
        }
    }
})
</script>