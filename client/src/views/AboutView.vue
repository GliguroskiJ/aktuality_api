<template>
    <div class="row">
        <div class="col-2 offset-2">
            <img src="https://picsum.photos/id/1/200/300" class="img-fluid" style="box-shadow: 0 0 15px black;">
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
