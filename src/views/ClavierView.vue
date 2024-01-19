<script>
import Clavier from '@/components/Clavier.vue'
export default {
  name: 'ClavierView',
  components: {
    Clavier,
  },
  computed: {
    contacts() {
      return this.contactStore.contacts
    }
  }
}
</script>

<template>
    <Clavier />
</template>
