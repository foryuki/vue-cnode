<template>
  <div class="index">
    this is index
  </div>
</template>

<script>
export default {
  ready () {
    var myroute = this.$route.name
    console.log(myroute)
  }
}
</script>

<style>
.index {
  background-color: green;
}
</style>
