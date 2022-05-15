<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navigation from "@/components/Navigation.vue";
</script>

<template>
  <header>
    <Navigation></Navigation>
  </header>

  <RouterView />
</template>

<style>
*{
  padding: 0;
  margin: 0;
}
</style>
