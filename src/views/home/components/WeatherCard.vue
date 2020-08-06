<template>
  <mg-card
    class="card-wrapper"
    :cardBackground="`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${require('@/assets/cloudy.jpg')}) center center/cover`"
    noBodyPadding
  >
    <div class="row-1">
      <h3>Cloudy</h3>
      <p>NanJing</p>
    </div>
    <div class="row-2">
      <svg-icon icon-class="bx-cloud" class-name="cloudy-icon" />
      <h2>-6 °</h2>
    </div>
    <div class="row-3">
      <span>Precipitation</span>
      <span>48%</span>
    </div>
    <div class="row-3">
      <span>Humidity</span>
      <span>60%</span>
    </div>
    <div class="row-3">
      <span>Wind</span>
      <span>4823 km/h</span>
    </div>
  </mg-card>
</template>

<script>
export default {
  name: 'WeatherCard'
}
</script>

<style lang="scss" scoped>
.card-wrapper {
  .row-1 {
    margin-top: 2rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    h3 {
      font-size: 1.5rem;
      margin: 0 0 0.5rem 0;
      color: #fff;
    }

    p {
      margin: 0 0 1.5rem 0;
      color: #fff;
    }
  }

  .row-2 {
    margin-bottom: 8rem;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .cloudy-icon {
      width: 84px;
      height: 84px;
    }

    h2 {
      font-size: 3.5rem;
      color: #fff;
    }
  }

  .row-3 {
    padding: 0 22px;
    margin-bottom: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.25rem;
    font-weight: 500;
  }
}
</style>
