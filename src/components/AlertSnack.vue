<!-- components/AlertSnackbar.vue -->
<template>
    <v-snackbar
      v-model="visible"
      :timeout="timeout"
      :color="color"
      location="top right"
      multi-line
    >
      {{ message }}
      <template #actions>
        <v-btn icon @click="visible = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue'
  
  export default defineComponent({
    name: 'AlertSnackbar',
    setup(_, { expose }) {
      const visible = ref(false)
      const message = ref('')
      const color = ref('info')
      const timeout = ref(3000)
  
      const show = (msg: string, type: 'success' | 'error' | 'info' | 'warning' = 'info', time = 3000) => {
        message.value = msg
        color.value = type
        timeout.value = time
        visible.value = true
      }
  
      expose({ show })
  
      return {
        visible,
        message,
        color,
        timeout,
      }
    },
  })
  </script>
  