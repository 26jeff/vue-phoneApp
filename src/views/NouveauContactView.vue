<script>
import NouveauContact from '@/components/NouveauContact.vue'
export default {
  name: 'NouveauContactView',
  components: {
    NouveauContact,
  },
  computed: {
    contacts() {
      return this.contactStore.contacts
    }
  }
}
</script>

<template>
    <NouveauContact />
</template>