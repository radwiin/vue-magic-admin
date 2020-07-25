<template>
  <div class="ps-container" ref="ps-container">
    <slot></slot>
  </div>
</template>

<script>
import PerfectScrollbar from '@/mixins/PerfectScrollbar'
export default {
  name: 'PsContainer',
  mixins: [PerfectScrollbar]
}
</script>

<style lang="scss" scoped>
.ps-container {
  height: 100%;
  position: relative;
}
</style>
