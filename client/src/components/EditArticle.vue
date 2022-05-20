<template>
  <div class="card">
    <div class="card-body">
      <div class="card-title">
        <h3>Edit Article</h3>
      </div>
      <hr/>
      <div class="card-text">
        <div class="row mb-3">
          <div class="col">
            <label class="form-label">Title</label>
            <input v-model="article.title" type="text" class="form-control" placeholder="Title"/>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label class="form-label">Text</label>
            <textarea v-model="article.text" class="form-control" rows="5"></textarea>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label class="form-label">Image URL</label>
            <input v-model="article.image" class="form-control" type="text" id="file">
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <button type="button" @click="editData" class="btn float-end btn-primary"><em class="bi-check"/></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditArticle",
  data() {
    return {
      article: {
        id: null,
        title: null,
        text: null,
        image: null
      }
    }
  },
  async mounted() {
    const id = this.$route.params.id;
    this.getData(id);
  },
  methods: {
    async getData(id) {
      const res = (await fetch(`http://localhost:3000/articles/${id}`, {method: 'GET'}));
      const data = await res.json();
      console.log(data);
      this.article = data;
    },
    async editData(){
      try {
        console.log(this.article);
        await fetch(`http://localhost:3000/articles/${this.article.id}`,
            {
              method: 'PATCH',
              body: JSON.stringify(this.article),
              headers:{
                'Content-type':'application/json'
              }
            }
        )
        window.location.assign("http://localhost:3001");
        alert("Edited!");
      } catch (e) {
        alert(e);
      }
    }
  }
}
</script>

<style scoped>

</style>
