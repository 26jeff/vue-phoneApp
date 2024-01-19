<script>
import Appel from '@/components/Appel.vue'
import { useAppelStore } from '@/stores/appel'
export default {
  name: 'AppelView',
  setup() {
    const appelStore = useAppelStore()
    return {
      appelStore
    }
  }, 
  components: {
    Appel,
  },
  computed: {
    appels() {
      return this.appelStore.appels
    }
  }
}
</script>

<template>
    <div v-for="appel in appels" :key="appel.contact">
        <Appel :appel="appel" />
    </div>
</template>

<style>
</style>
