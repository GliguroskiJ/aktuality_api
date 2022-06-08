<template>
  <div class="card text-white bg-dark" style="box-shadow: 0 0 15px black;">
    <div class="card-body">
      <div class="card-title">
        <h3>New Article</h3>
      </div>
      <hr/>
      <div class="card-text">
        <div class="row mb-3">
          <div class="col">
            <label class="form-label">Title</label>
            <input v-model="article.title" type="text" class="form-control bg-dark text-white" placeholder="Enter title here"/>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label class="form-label">Text</label>
            <textarea v-model="article.text" class="form-control bg-dark text-white" rows="9" placeholder="Enter text here"></textarea>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col">
            <label class="form-label">Image URL</label>
            <input v-model="article.image" class="form-control bg-dark text-white" type="text" placeholder="Enter image URL here">
          </div>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <button type="button" @click="send" class="btn float-end btn-primary"><em class="bi-check"/></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewArticle",
  data() {
    return {
      article: {
        title: null,
        text: null,
        image: null
      }
    }
  },
  methods: {
    async send() {
      try {
        console.log(this.article);
        await fetch('http://localhost:3000/articles',
            {
              method: 'POST',
              body: JSON.stringify(this.article),
              headers:{
                'Content-type':'application/json'
              }
            }
        )
        window.location.assign("http://localhost:3001");
        alert("Saved!");
      } catch (e) {
        alert(e);
      }
    }
  }
}
</script>

<style scoped>

</style>
