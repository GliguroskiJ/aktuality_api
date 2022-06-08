<script>
import Article from "@/components/Article.vue";
import Preview from "@/components/Preview.vue";

export default {
  components: {Preview, Article},
  data() {
    return {
      articles: []
    }
  },
  async created() {
    const res = await fetch('http://localhost:3000/articles',{method:'GET'});
    console.log(res);
    this.articles = await res.json();
  }
}
</script>

<template>
  <div class="row justify-content-center">
    <div class="col-10 pb-3 pt-3" v-for="article in articles">
      <Preview :id="article.id" :title="article.title" :date="article.date" :text="article.text" :image="article.image"></Preview>
    </div>
  </div>
</template>
