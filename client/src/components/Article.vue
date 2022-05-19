<template>
  <div className="row">
    <div className="col-md-6 offset-md-3 p-5 bg-light">
      <h3>{{ article.title }}</h3>
      <h6>{{ formattedDate }}</h6>
      <p v-html="article.text"></p>
      <button class="btn-danger text-black float-end" @click="del(article.id)"><em class="bi-trash"></em> Delete</button>
      <button class="btn-info float-end me-3" @click=""><em class="bi-pencil"></em> Edit</button>
    </div>
  </div>
  <footer style="height: 10vh;"></footer>
</template>

<script>
export default {
  name: "Article",
  data() {
    return {
      article: {
        id: null,
        title: null,
        date: null,
        text: null,
        image: null
      }
    }
  },
  computed: {
    formattedDate() {
      return this.article.date ? new Date(this.article.date).toLocaleDateString() : '';
    }
  },
  async mounted() {
    const id = this.$route.params.id;
    this.article = await this.getData(id);
  },
  methods: {
    async getData(id) {
      const res = await fetch(`http://localhost:3000/articles/${id}`, {method: 'GET'});
      return res.json();
    },
    async del(id) {
      try {
        const res = await fetch(`http://localhost:3000/articles/${id}`, {method: 'DELETE'});
        alert("Deleted!");
        window.location.assign("http://localhost:3001");
        return res.json();
      } catch (e) {
        alert(e);
      }
    }
  }
}
</script>

<style scoped>

</style>
