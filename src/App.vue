<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="box">
    <nav>
      <RouterLink to="/">Journal</RouterLink>
      <RouterLink to="/contact">Contact</RouterLink>
      <RouterLink to="/clavier">Clavier</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<style>
  .box {
    width: 230px;
    height: 500px;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #145bb7;
    border-radius: 30px;
  }

  nav {
    display: flex;
    justify-content: space-around;
    background-color: #ffffff;
    padding: 10px;
    border-radius: 10px;
  }

  nav > {
    text-decoration: none;
    color: #d9d9d9;
    font-weight: bold;
    padding: 5px;
    transition: background-color 0.3s ease;
  }

  nav > :hover {
    background-color: #555;
  }

  img {
    width: 30px;
    height: 30px;
    margin-left: 150px;
  }

  img:hover {
    cursor: pointer;
  }
  
</style>
