<template>
    <div class="row">
        <div class="col-2 offset-2">
            <img src="https://picsum.photos/id/237/200/300" class="img-fluid">
        </div>
        <div class="col-6">
            <Bio></Bio>
        </div>
    </div>
</template>

<script>
import Bio from "@/components/Bio.vue"
export default {
    components: {Bio},
    name: "AboutView",
}
</script>

<style scoped>

</style>
