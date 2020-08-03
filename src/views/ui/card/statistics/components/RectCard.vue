<template>
  <mg-card noBodyPadding>
    <div class="content-wrapper">
      <div class="text">
        <h2>{{ value }}</h2>
        <span>{{ label }}</span>
      </div>
      <span class="icon-bg">
        <svg-icon :icon-class="icon" class-name="icon" />
      </span>
    </div>
  </mg-card>
</template>

<script>
import { setColor } from '@/utils/vuesax'
export default {
  name: 'RectCard',
  props: {
    icon: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'primary'
    },
    value: {
      type: String
    },
    label: {
      type: String
    }
  },
  mounted() {
    setColor('color', this.color, this.$el, true)
  },
  updated() {
    setColor('color', this.color, this.$el, true)
  },
  watch: {
    color() {
      setColor('color', this.color, this.$el, true)
    }
  }
}
</script>

<style lang="scss" scoped>
.content-wrapper {
  padding: 1.5rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  font-family: Montserrat, Helvetica, Arial, sans-serif;

  .icon-bg {
    padding: 0.6rem;
    width: 3rem;
    height: 3rem;
    border-radius: 3rem;
    background: rgba(var(--vs-color), 0.15);

    .icon {
      width: 100%;
      height: 100%;
      color: rgba(var(--vs-color), 1);
    }
  }

  h2 {
    font-size: 1.7rem;
    font-weight: 700;
    margin: 0 0 0.25rem;
    line-height: 1.2;
    color: #2c2c2c;
  }

  span {
    color: #626262;
  }
}
</style>
