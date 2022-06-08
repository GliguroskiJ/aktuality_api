<template>
  <div class="sticky-top mx-0" style="width: 100vw; box-shadow: 0 2px 10px 0 #dcdcdc; background-color: rgba(220,220,220,0.85); -webkit-backdrop-filter: saturate(180%) blur(20px); backdrop-filter: saturate(180%) blur(20px);">
    <header class="d-flex flex-wrap justify-content-center py-0 mb-4">
      <a class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <router-link class="nav-link text-dark" to="/">
          <href class="fs-2 ms-3 text-black">ČVUT News</href>
        </router-link>
      </a>

      <ul class="mt-3">
        <li class="nav-item btn bg-dark border-0" style="border-radius: 10px;">
          <router-link class="nav-link text-white" to="/">
            Home
          </router-link>
        </li>
        <li class="nav-item btn bg-dark mx-1 border-0" style="border-radius: 10px">
          <router-link class="nav-link text-white" to="/about">
            About
          </router-link>
        </li>
        <li class="nav-item me-3 btn bg-dark border-0" style="border-radius: 10px">
          <router-link class="nav-link text-white" to="/narticle">
            New article
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
li{
  transition: all 0.2s linear 0s;
}
li:hover,
li:focus {
  box-shadow: 0 0.5em 0.5em -0.4em;
  transform: translateY(-0.25em);
  transition: all 0.2s linear 0s;
}
</style>