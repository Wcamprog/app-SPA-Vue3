<template>
  <v-app>
    <v-main class="bg-grey-lighten-4">
      <router-view />
      <AlertSnack ref="alertRef" />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
  import { onMounted, ref } from 'vue'
  import AlertSnack from './components/AlertSnack.vue'
  import { registerAlert } from './services/alertService'

  const alertRef = ref()

  onMounted(() => {
    if (alertRef.value) registerAlert(alertRef.value)
  })

</script>
