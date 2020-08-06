<template>
  <page-container header="Statistics Card">
    <vs-row justify="space-between" style="margin: 0 -0.7rem;width:unset;">
      <vs-col v-for="(item, index) in cubeCards" :key="index" lg="2" sm="4" style="padding: 0 0.7rem 1.4rem">
        <cube-card v-bind="item" />
      </vs-col>
    </vs-row>
    <vs-row justify="space-between" style="margin: 0 -0.7rem;width:unset;">
      <vs-col v-for="(item, index) in rectCards" :key="index" lg="3" sm="6" style="padding: 0 0.7rem 1.4rem">
        <rect-card v-bind="item" />
      </vs-col>
    </vs-row>
    <vs-row justify="space-between" style="margin: 0 -0.7rem;width:unset;">
      <vs-col v-for="(item, index) in areaCards" :key="index" lg="3" sm="6" style="padding: 0 0.7rem 1.4rem">
        <area-card v-bind="item" />
      </vs-col>
    </vs-row>
    <vs-row justify="space-between" style="margin: 0 -0.7rem;width:unset;">
      <vs-col v-for="(item, index) in lineCards" :key="index" lg="4" sm="4" style="padding: 0 0.7rem 1.4rem">
        <line-card v-bind="item" />
      </vs-col>
    </vs-row>
  </page-container>
</template>

<script>
import CubeCard from './components/CubeCard'
import RectCard from './components/RectCard'
import AreaCard from './components/AreaCard'
import LineCard from './components/LineCard'
export default {
  name: 'statistics-card',
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
    ],
    rectCards: [
      {
        icon: 'bx-chip',
        color: 'primary',
        value: '86%',
        label: 'CPU Usage'
      },
      {
        icon: 'bx-server',
        color: 'success',
        value: '1.2gb',
        label: 'Memory Usage'
      },
      {
        icon: 'bx-pulse',
        color: 'danger',
        value: '0.1%',
        label: 'Downtime Ratio'
      },
      {
        icon: 'bx-error-alt',
        color: 'warn',
        value: '13',
        label: 'Issues Found'
      }
    ],
    areaCards: [
      {
        icon: 'bx-group',
        color: 'primary',
        value: '92.6k',
        label: 'Subscribers Gained'
      },
      {
        icon: 'bx-dollar',
        color: 'success',
        value: '1.2gb',
        label: 'Revenue Generated'
      },
      {
        icon: 'bx-cart',
        color: 'danger',
        value: '36%',
        label: 'Quarterly Sales'
      },
      {
        icon: 'bx-shopping-bag',
        color: 'warn',
        value: '97.5k',
        label: 'Orders Received'
      }
    ],
    lineCards: [
      {
        icon: 'bx-chip',
        color: 'primary',
        value: '86%',
        label: 'CPU Usage'
      },
      {
        icon: 'bx-server',
        color: 'success',
        value: '1.2gb',
        label: 'Memory Usage'
      },
      {
        icon: 'bx-pulse',
        color: 'danger',
        value: '0.1%',
        label: 'Downtime Ratio'
      }
    ]
  })
}
</script>
