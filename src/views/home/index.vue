<template>
  <page-container>
    <div style="margin: 0 0 10px 0">
      <mg-card style="width:400px" header="Title">
        <p style="margin: 0 0 0.6rem 0">
          You can use title-color prop to change color of title of card. This prop supports hex, rgba, rgb and theme colors.
        </p>
        <p style="margin: 0">
          Oat cake powder sesame snaps. Chocolate bar dessert bonbon chocolate bar pudding apple pie muffin chocolate ice cream. I love bear claw I
          love.
        </p>
      </mg-card>
    </div>
    <div style="margin: 10px 0">
      <!-- <radial-bar-card style="width:400px"></radial-bar-card> -->
    </div>
    <div style="margin: 10px 0">
      <weather-card style="width:400px"></weather-card>
    </div>
  </page-container>
</template>

<script>
import WeatherCard from './components/WeatherCard'
import RadialBarCard from './components/RadialBarCard'

export default {
  name: 'home',
  components: {
    WeatherCard,
    RadialBarCard
  },
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
