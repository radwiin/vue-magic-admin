<template>
  <div class="mg-card" :class="`is-${shadow}-shadow`" :style="{ background: cardBackground }">
    <div class="mg-card__header" v-if="$slots.header || title">
      <slot name="header">
        <h4 :style="{ color: titleColor || (cardBackground && '#ffffff') }">{{ title }}</h4>
        <h6 v-if="subtitle" :style="{ color: subtitleColor || (cardBackground && '#ffffff') }">{{ subtitle }}</h6>
      </slot>
    </div>
    <div
      :class="['mg-card__body', { 'no-padding': noBodyPadding }, bodyClass]"
      :style="{ color: contentColor || (cardBackground && '#ffffff'), ...bodyStyle }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MgCard',
  props: {
    title: {
      type: String
    },
    subtitle: {
      type: String
    },
    subtitleColor: {
      type: String
    },
    titleColor: {
      type: String
    },
    contentColor: {
      type: String
    },
    bodyClass: {
      type: String,
      default: ''
    },
    bodyStyle: {
      // this prop may be unnecessary
      type: Object
    },
    noBodyPadding: {
      type: Boolean,
      default: false
    },
    shadow: {
      type: String,
      default: 'always'
    },
    cardBackground: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
.mg-card {
  border-radius: 0.5rem;
  border: 1px solid #ebeef5;
  background-color: #fff;
  overflow: hidden;
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

    h4 {
      font-size: 1.2rem;
    }

    h6 {
      font-size: 0.875rem;
      margin-top: 0.3rem;
    }
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
