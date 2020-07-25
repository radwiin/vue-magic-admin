<template>
  <div style="padding: 0 30px">
    <div class="thing" style="background: red">thing</div>
    <div class="thing" style="background: blue">thing</div>
    <div class="thing" style="background: red">thing</div>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  data: () => ({
    active: 'home'
  }),
  mounted() {}
}
</script>

<style lang="scss" scoped>
.thing {
  height: 400px;
}
</style>
