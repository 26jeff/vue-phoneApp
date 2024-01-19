<script>
import { useContactStore } from '@/stores/contact' 
export default {
  name: 'NouveauContact',
  setup() {
    const contactStore = useContactStore()
    return {
      contactStore
    }
  },
  data() {
    return {
      nouveauContact: {
        nom: '',
        numero: '',
      },
    }
  },
  methods: {
    ajoutContact() {
      this.contactStore.ajoutContact(this.nouveauContact)
      this.nouveauContact = {
        nom: '',
        numero: '',
      }
    },
  },
}
</script>

<template>
    <form @submit.prevent="ajoutContact()">
        <input type="text" placeholder="nom" v-model="nouveauContact.nom">
        <input type="number" placeholder="numero" v-model="nouveauContact.numero">
        <button type="submit">Ajouter</button>
    </form>
</template>

<style scoped>
</style>