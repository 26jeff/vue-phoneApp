<script>

export default {
    name: 'Contact',
    props: [
        'contact'
    ]
}

</script>

<template>
    <div> 
        <h2>{{ contact.nom }}</h2>
        <p>{{ contact.numero }}</p>
        <img src="../images/appel.png" alt="logo appel" />
    </div>
</template>

<style scoped>
</style>