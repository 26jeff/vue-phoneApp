<script>
import Contact from '@/components/Contact.vue'
import { useContactStore } from '@/stores/contact'
export default {
  name: 'ContactView',
  setup() {
    const contactStore = useContactStore()
    return {
      contactStore
    }
  }, 
  components: {
    Contact,
  },
  computed: {
    contacts() {
      return this.contactStore.contacts
    }
  }
}
</script>

<template>
    <RouterLink to="/nouveaucontact"><img src="../images/plus.png" alt="logo plus" /></RouterLink>
    <div v-for="contact in contacts" :key="contact.nom">
    <Contact :contact="contact" />
    </div>
</template>

<style>
</style>
