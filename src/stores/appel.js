import { defineStore } from 'pinia'

export const useAppelStore = defineStore('appel', {
    state: () => ({
        appels: [
            {
              contact: 'Maman',
              date: 'le 11 novembre à 17:42',
            },
            {
              contact: 'Mimi',
              date: 'le 11 novembre à 16:23',
            },
            {
              contact: '0626262626',
              date: 'le 11 novembre à 13:36',
            },
        ]
    }),
    actions: {
        ajoutAppel(appel) {
            this.appels.push(appel)
        },
    },
})