<template>
  <div class="ra-card" :class="`is-${shadow}-shadow`" :style="{ background: cardBackground }">
    <div class="ra-card__header" v-if="$slots.header || header" :style="{ color: titleColor }">
      <slot name="header">{{ header }}</slot>
    </div>
    <div :class="['ra-card__body', { 'no-padding': noBodyPadding }, bodyClass]" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RaCard',
  props: {
    header: {},
    bodyClass: {
      type: String,
      default: ''
    },
    noBodyPadding: {
      type: Boolean,
      default: false
    },
    bodyStyle: {},
    shadow: {
      type: String,
      default: 'always'
    },
    titleColor: {
      type: String
    },
    cardBackground: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.ra-card {
  border-radius: 0.5rem;
  border: 1px solid #ebeef5;
  background-color: #fff;
  overflow: hidden;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  font-weight: 400;
  line-height: 1.5;
  letter-spacing: 0.01rem;

  &.is-always-shadow,
  &.is-hover-shadow:focus,
  &.is-hover-shadow:hover {
    -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }

  &__header {
    padding: 1.3rem 1.3rem 0;
    box-sizing: border-box;
    color: #2c2c2c;
    font-size: 1.2rem;
  }

  &__body {
    padding: 1.3rem;
    color: #626262;
    font-size: 0.875rem;

    &.no-padding {
      padding: 0px;
    }
  }
}
</style>
