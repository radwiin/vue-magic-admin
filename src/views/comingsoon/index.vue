<template>
  <div class="index">
    <mg-card>
      <div class="box">
        <h1 class="title">We are launching soon</h1>
        <img src="./../../assets/rocket.png" alt="rocket" />
        <div>time</div>
        <div class="line"><span />Subscribe<span /></div>
        <div class="info">If you would like to be notified when our app is live, Please subscribe to our mailing list.</div>
        <div class="input">
          <vs-input v-model="email" placeholder="email" />
        </div>
        <vs-button class="btn" @click="handleSubmit">Subscribe</vs-button>
      </div>
    </mg-card>
  </div>
</template>

<script>
export default {
  name: 'index',
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
  .box {
    width: 60vw;
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
>>> .vs-input-content.vs-input {
  width: 100%;
}
</style>
