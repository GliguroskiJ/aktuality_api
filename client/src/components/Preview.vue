<template>
  <div class="card bg-dark" style="box-shadow: 0 0 15px black;">
    <div class="row">
      <div class="col-xl-3 col-lg-4">
        <img :src="image" alt="" class="card-img img-fluid p-1 w-100 h-100">
      </div>
      <div class="col-xl-9 col-lg-8 text-white">
        <div class="card-body">
          <h3 class="card-title text-truncate">{{ title }}</h3>
          <p class="card-text my-5 truncate">{{ text }}</p>
          <ul class="float-start m-0 mb-3 p-0">
            <li class="nav-item btn p-0 m-0 border-0">
              <router-link :to="`/article/${id}`" class="btn bg-light text-black">
                Číst dále
                <em class="bi-box-arrow-in-up-right"/>
              </router-link>
            </li>
          </ul>
          <h6 class="card-subtitle m-0 mt-3 p-0 float-end">{{ formattedDate }}</h6>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Preview",
  props: {
    id: Number,
    title: String,
    date: String,
    text: String,
    image: String
  },
  computed: {
    formattedDate() {
      return new Date(this.date).toLocaleDateString();
    }
  }
}
</script>

<style scoped>
li{
  transition: 0.3s ease-out;
}
li:hover,
li:focus {
  transform: translateX(+8px) translateY(-5px);
  transition: 0.2s ease-out;
  box-shadow: -5px 5px 5px 0 gray;
}
.truncate{
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
