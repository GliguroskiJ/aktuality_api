<template>
  <div class="sticky-top bg-black" style="width: 100vw; filter: drop-shadow(0 0 0.5rem white);">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4">
      <a class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <router-link class="nav-link text-dark" to="/">
          <span class="fs-3 ms-3 text-white">ČVUT News</span>
        </router-link>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/">
            <em class="bi-house"></em> Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-white" to="/about">
            <em class="bi-info-circle-fill"></em> About
          </router-link>
        </li>
        <li class="nav-item me-3">
          <router-link class="nav-link text-white" to="/narticle">
            <em class="bi-plus-circle"></em> New article
          </router-link>
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
export default {
  name: "Navigation"
}
</script>

<style scoped>

</style>