<template>
    <v-card class="" elevation="0" rounded="xs">
      <v-card-text class="bg-blue-grey-lighten-2">
        <v-row dense>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="form.name"
              label="Nombre"
              :readonly="disabled"
              variant="outlined"
              density="comfortable"
              hide-details
            />
          </v-col>
  
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="form.email"
              label="Correo electrónico"
              :readonly="disabled"
              variant="outlined"
              density="comfortable"
              hide-details
            />
          </v-col>
  
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="form.company"
              label="Empresa"
              :readonly="disabled"
              variant="outlined"
              density="comfortable"
              hide-details
            />
          </v-col>
  
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="form.address"
              label="Dirección"
              :readonly="disabled"
              variant="outlined"
              density="comfortable"
              hide-details
            />
          </v-col>
  
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="form.phone"
              label="Teléfono"
              :readonly="disabled"
              variant="outlined"
              density="comfortable"
              hide-details
            />
          </v-col>
  
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="form.website"
              label="Sitio web"
              :readonly="disabled"
              variant="outlined"
              density="comfortable"
              hide-details
            />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </template>
  
  <script lang="ts">
  import { defineComponent, reactive, watch } from 'vue'
  
  export default defineComponent({
    name: 'UserCard',
    props: {
      user: {
        type: Object,
        required: true,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    setup(props) {
      const form = reactive({
        name: '',
        email: '',
        company: '',
        address: '',
        phone: '',
        website: '',
      })
  
      watch(
        () => props.user,
        (newUser) => {
          if (newUser) {
            form.name = newUser.name ?? ''
            form.email = newUser.email ?? ''
            form.company = newUser.company?.name ?? ''
            form.address = newUser.address?.street ?? ''
            form.phone = newUser.phone ?? ''
            form.website = newUser.website ?? ''
          }
        },
        { immediate: true }
      )
  
      return {
        form,
      }
    },
  })
  </script>
  