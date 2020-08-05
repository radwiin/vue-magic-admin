<template>
  <ps-container class="page-container">
    <div class="page-container__header" v-if="header">
      <slot name="header">{{ header }}</slot>
    </div>
    <slot></slot>
  </ps-container>
</template>

<script>
export default {
  name: 'PageContainer',
  props: {
    header: {}
  }
}
</script>

<style lang="scss" scoped>
.page-container {
  padding: 90px 30px 0;

  &__header {
    font-size: 1.8rem;
    color: #636363;
    margin-bottom: 1.2rem;
  }
}
</style>
