<template>
  <mg-card noBodyPadding>
    <div class="header-wrapper">
      <span class="icon-bg">
        <svg-icon :icon-class="icon" class-name="icon" />
      </span>
      <h2>{{ value }}</h2>
      <span>{{ label }}</span>
    </div>
    <div style="width: 100%">
      <apex-chart ref="chart" type="area" height="100" :options="chartOptions" :series="series"></apex-chart>
    </div>
  </mg-card>
</template>

<script>
import VueApexCharts from 'vue-apexcharts'
import { setColor } from '@/utils/vuesax'
export default {
  name: 'AreaCard',
  components: {
    ApexChart: VueApexCharts
  },
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
  data() {
    return {
      series: [
        {
          name: 'series1',
          data: [30, 40, 34, 51, 42, 109, 100]
        }
      ],
      chartOptions: {
        chart: {
          height: 100,
          type: 'area',
          toolbar: {
            show: false // 关闭工具栏
          },
          sparkline: {
            enabled: true // 启动迷你画模式
          }
        },
        colors: ['#1e1e1e'],
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: [
            '2018-09-19T00:00:00.000Z',
            '2018-09-19T01:30:00.000Z',
            '2018-09-19T02:30:00.000Z',
            '2018-09-19T03:30:00.000Z',
            '2018-09-19T04:30:00.000Z',
            '2018-09-19T05:30:00.000Z',
            '2018-09-19T06:30:00.000Z'
          ]
        },
        tooltip: {
          followCursor: true,
          x: {
            show: false
          }
        }
      }
    }
  },
  mounted() {
    let newColor = setColor('color', this.color, this.$el, true)
    this.chartOptions.colors = [`rgba(${newColor}, 1)`]
    // Apex Charts dont resize properly, it may caused by flex. Use nextTick to avoid.
    this.$nextTick(() => {
      this.$refs.chart.updateOptions(this.chartOptions)
    })
  },
  updated() {
    let newColor = setColor('color', this.color, this.$el, true)
    this.chartOptions.colors = [`rgba(${newColor}, 1)`]
    this.$nextTick(() => {
      this.$refs.chart.updateOptions(this.chartOptions)
    })
  },
  watch: {
    color() {
      let newColor = setColor('color', this.color, this.$el, true)
      this.chartOptions.colors = [`rgba(${newColor}, 1)`]
      this.$nextTick(() => {
        this.$refs.chart.updateOptions(this.chartOptions)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.header-wrapper {
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  padding: 21px 21px 0;

  .icon-bg {
    padding: 0.6rem;
    margin-bottom: 1rem;
    width: 3rem;
    height: 3rem;
    border-radius: 3rem;
    background: rgba(var(--vs-color), 0.15);
    font-family: Montserrat, Helvetica, Arial, sans-serif;

    .icon {
      width: 100%;
      height: 100%;
      color: rgba(var(--vs-color), 1);
    }
  }

  h2 {
    font-size: 24.36px;
    font-weight: 900;
    margin: 0 0 0.25rem;
    line-height: 1.2;
    color: #2c2c2c;
  }

  span {
    color: #626262;
  }
}
</style>
