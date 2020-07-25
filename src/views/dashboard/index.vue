<template>
  <div style="padding: 0px 30px">
    <div style="margin: 0 0 10px 0">
      <ra-card style="width:400px" header="Title">
        <p style="margin: 0 0 0.6rem 0">
          You can use title-color prop to change color of title of card. This prop supports hex, rgba, rgb and theme colors.
        </p>
        <p style="margin: 0">
          Oat cake powder sesame snaps. Chocolate bar dessert bonbon chocolate bar pudding apple pie muffin chocolate ice cream. I love bear claw I
          love.
        </p>
      </ra-card>
    </div>
    <div style="margin: 10px 0">
      <radial-bar-card style="width:400px"></radial-bar-card>
    </div>
    <div style="margin: 10px 0">
      <weather-card style="width:400px"></weather-card>
    </div>
    <div style="margin: 10px 0">
      <cube-card style="width:170px"></cube-card>
    </div>
    <div style="margin: 10px 0">
      <rect-card style="width:305px" />
    </div>
    <div style="margin: 10px 0">
      <area-card style="width:305px" />
    </div>
    <div style="margin: 10px 0">
      <line-card style="width:400px" />
    </div>
  </div>
</template>

<script>
import RaCard from '@/components/RaCard'
import CubeCard from './components/CubeCard'
import RectCard from './components/RectCard'
import AreaCard from './components/AreaCard'
import LineCard from './components/LineCard'
import WeatherCard from './components/WeatherCard'
import RadialBarCard from './components/RadialBarCard'

export default {
  name: 'dashboard',
  components: {
    RaCard,
    CubeCard,
    RectCard,
    AreaCard,
    LineCard,
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
