<template>
  <div class="index">
    <mg-card>
      <div class="box">
        <h1 class="title">We are launching soon</h1>
        <img src="./../../assets/rocket.png" alt="rocket" />
        <div class="time-wrapper">
          <countdown :time="new Date('03/09/2021 00:00:00').getTime() - new Date().getTime()">
            <template slot-scope="props">
              <div class="item-item">
                <span class="timer">{{ props.days }}</span>
                <span>Days</span>
              </div>
              <div class="item-item">
                <span class="timer">{{ props.hours }}</span>
                <span>Hours</span>
              </div>
              <div class="item-item">
                <span class="timer">{{ props.minutes }}</span>
                <span>Minutes</span>
              </div>
              <div class="item-item">
                <span class="timer">{{ props.seconds }}</span>
                <span>Seconds</span>
              </div>
            </template>
          </countdown>
        </div>
        <div class="line"><span />Subscribe<span /></div>
        <div class="info">If you would like to be notified when our app is live, Please subscribe to our mailing list.</div>
        <div class="input">
          <vs-input v-model="email" placeholder="email" block />
        </div>
        <vs-button class="btn" @click="handleSubmit">Subscribe</vs-button>
      </div>
    </mg-card>
  </div>
</template>

<script>
import VueCountdown from '@chenfengyuan/vue-countdown'
export default {
  name: 'index',
  components: {
    countdown: VueCountdown
  },
  data() {
    return {
      email: ''
    }
  },
  methods: {
    handleSubmit() {}
  }
}
</script>

<style lang="scss" scoped>
.index {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url('./../../assets/errorPage.png') no-repeat center;
  background-size: cover;
  .box {
    width: 60vw;
    max-width: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      text-align: center;
      margin-top: 0;
    }
    img {
      width: 16vw;
    }
    .time-wrapper {
      width: 100%;
      & > span {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
        .item-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          .timer {
            font-size: 36px;
          }
        }
      }
    }
    .line {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 12px 0;
      span {
        flex: 1;
        display: block;
        border-top: 1px solid #ccc;
        &:first-child {
          margin-right: 12px;
        }
        &:last-child {
          margin-left: 12px;
        }
      }
    }
    .info {
      font-size: 12px;
      color: #999;
    }
    .input {
      width: 100%;
      margin: 12px 0;
    }
    .btn {
      width: 100%;
    }
  }
}
</style>
