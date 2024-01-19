import { defineStore } from 'pinia'

export const useContactStore = defineStore('contact', {
    state: () => ({
        contacts: [
            {
              nom: 'Maman',
              numero: '0606060605',
            },
            {
              nom: 'Mimi',
              numero: '0606060626',
            },
            {
              nom: 'Papa',
              numero: '0606060606',
            },
        ]
    }),
    actions: {
        ajoutContact(contact) {
            this.contacts.push(contact)
        },
    },
})