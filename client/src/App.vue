<script setup>
import {RouterView} from 'vue-router'
import Navigation from "@/components/Navigation.vue";
import Header from "@/components/Header.vue";
</script>

<template>
    <Navigation/>
    <Header/>
    <div class="container-fluid bg-white">
        <RouterView/>
    </div>
</template>

<style>

</style>
