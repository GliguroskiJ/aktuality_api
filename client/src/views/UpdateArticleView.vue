<template>
  <div class="row">
    <div class="col-8 offset-2">
      <EditArticle></EditArticle>
    </div>
  </div>
</template>

<script>
import EditArticle from '@/components/EditArticle.vue';

export default {
  name: "UpdateArticleView",
  components: {EditArticle}
}
</script>

<style scoped>

</style>
