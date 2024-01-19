<script>
import { useContactStore } from '@/stores/contact';

export default {
    name: 'Clavier',
    data() {
        return {
            numeroClique: '',
            nomNumero: '',
        };
    },
    methods: {
        cliquerNumero(numero) {
            if (this.numeroClique.length < 10) {
                this.numeroClique += numero;
            }
            const contactStore = useContactStore();
            const contact = contactStore.contacts.find(contact => contact.numero === this.numeroClique);
            if (contact) {
                this.nomNumero = contact.nom;
            }
        }
    },
    computed: {
        numeros() {
            return [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        }
    }
};
</script>

<template>
    <div>
        <h1>{{ numeroClique }}</h1>
        <h2>{{ nomNumero }}</h2>
        <div class="clavier">
            <button v-for="numero in numeros" :key="numero" @click="cliquerNumero(numero)">
                {{ numero }}
            </button>
        </div>
        <img src="../images/appel.png" alt="logo appel" />
    </div>
</template>

<style scoped>
.clavier {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
    }

    button {
        width: 50px;
        height: 50px;
        font-size: 1.2em;
        background-color: #f0f0f0;
        border: 1px solid #ccc;
        border-radius: 15px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    button:hover {
        background-color: #d9d9d9;
    }

    h1 {
        font-size: 2em;
        margin-bottom: 10px;
    }

    h2 {
        font-size: 1.5em;
        color: #fff;
        margin-bottom: 20px;
    }

</style>