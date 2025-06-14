<template>
    <v-text-field
      v-model="model"
      :label="label"
      prepend-inner-icon="mdi-magnify"
      variant="outlined"
      hide-details
      clearable
      single-line
      density="compact"
      rounded="lg"
      class="mb-4 mt-4"
    />
  </template>
  
  <script lang="ts">
  import { computed, defineComponent} from 'vue'
  
  export default defineComponent({
    name: 'SearchBar',
    props: {
      modelValue: {
        type: [String, null],
        required: true
      },
      label: {
        type: String,
        default: 'Buscar'
      }
    },
    emits: ['update:modelValue'],
    setup(props, { emit }) {
      const model = computed({
        get: () => props.modelValue,
        set: (val: string) => emit('update:modelValue', val)
      })
  
      return {
        model
      }
    }
  })
  </script>
  