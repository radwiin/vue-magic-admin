<template>
  <div>
    <vs-row justify="space-between" style="margin: 0 -1rem;width:unset;">
      <vs-col v-for="i in 6" :key="i" lg="2" sm="4" style="padding: 0 1rem">
        <cube-card style="width:100%;"></cube-card>
      </vs-col>
    </vs-row>
    <div style="margin: 10px 0"></div>
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
import CubeCard from './components/CubeCard'
import RectCard from './components/RectCard'
import AreaCard from './components/AreaCard'
import LineCard from './components/LineCard'
export default {
  name: 'statistics',
  components: {
    CubeCard,
    RectCard,
    AreaCard,
    LineCard
  }
}
</script>

<style></style>
