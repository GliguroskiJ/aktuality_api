<template>
  <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <router-link class="nav-link text-dark" to="/">
          <span class="fs-3">ČVUT News</span>
        </router-link>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item">
          <router-link class="nav-link text-dark" to="/">
            <em class="bi-house"></em> Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-dark" to="/about">
            <em class="bi-info-circle-fill"></em> About
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-dark" to="/narticle">
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