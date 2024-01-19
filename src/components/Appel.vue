<script>

export default {
    name: 'Appel',
    props: [
        'appel'
    ]
}

</script>

<template>
    <div> 
        <h2>{{ appel.contact }}</h2>
        <p>{{ appel.date }}</p>
        <img src="../images/appel.png" alt="logo appel" />
    </div>
</template>

<style scoped>
</style>