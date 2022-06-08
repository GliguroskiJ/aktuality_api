<template>
    <div class="row">
        <div class="col-4 offset-1">
            <img src="https://bioem.fbmi.cvut.cz/lib/exe/fetch.php/obrazky/fbmi_cvut.jpg" class="img-fluid" style="box-shadow: 0 0 15px black; border-radius: 5px">
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
