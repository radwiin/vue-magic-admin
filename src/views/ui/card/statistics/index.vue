<template>
  <div>
    <div class="title">Statistics Card</div>
    <vs-row justify="space-between" style="margin: 0 -0.7rem;width:unset;">
      <vs-col v-for="(item, index) in cubeCards" :key="index" lg="2" sm="4" style="padding: 0 0.7rem 1.4rem">
        <cube-card v-bind="item" />
      </vs-col>
    </vs-row>
    <vs-row justify="space-between" style="margin: 0 -0.7rem;width:unset;">
      <vs-col v-for="i in 4" :key="i" lg="3" sm="6" style="padding: 0 0.7rem 1.4rem">
        <rect-card />
      </vs-col>
    </vs-row>
    <vs-row justify="space-between" style="margin: 0 -0.7rem;width:unset;">
      <vs-col v-for="i in 4" :key="i" lg="3" sm="6" style="padding: 0 0.7rem 1.4rem">
        <area-card />
      </vs-col>
    </vs-row>
    <vs-row justify="space-between" style="margin: 0 -0.7rem;width:unset;">
      <vs-col v-for="i in 3" :key="i" lg="4" sm="4" style="padding: 0 0.7rem 1.4rem">
        <line-card />
      </vs-col>
    </vs-row>
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
  },
  data: () => ({
    cubeCards: [
      {
        icon: 'bx-show',
        color: 'primary',
        value: '36.9k',
        label: 'Views'
      },
      {
        icon: 'bx-comment',
        color: 'success',
        value: '12k',
        label: 'Comments'
      },
      {
        icon: 'bx-shopping-bag',
        color: 'warn',
        value: '978',
        label: 'Orders'
      },
      {
        icon: 'bx-heart',
        color: 'danger',
        value: '26.8k',
        label: 'Favorited'
      },
      {
        icon: 'bx-smile',
        color: 'success',
        value: '689',
        label: 'Reviews'
      },
      {
        icon: 'bx-redo',
        color: 'warn',
        value: '2',
        label: 'Returns'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 1.8rem;
  color: #636363;
  margin-bottom: 1.2rem;
}
</style>
