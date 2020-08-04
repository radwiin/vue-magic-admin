<template>
  <div class="index">
    <div class="wrapper">
      <div>
        <img :src="error[errorCode].img" :alt="error[errorCode].title" />
      </div>
      <h1 class="title">{{ error[errorCode].title }}</h1>
      <p>{{ error[errorCode].info }}</p>
      <div>
        <vs-button
          class="btn"
          gradient
          @click="
            () => {
              this.$router.push({ path: '/' })
            }
          "
        >
          back home
        </vs-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data() {
    return {
      error: {
        404: {
          title: '404 - Page Not Found!',
          info:
            'paraphonic unassessable foramination Caulopteris worral Spirophyton encrimson esparcet aggerate chondrule restate whistler shallopy biosystematy area bertram plotting unstarting quarterstaff.',
          img: require('@/assets/error-img.png')
        },
        500: {
          title: 'Internal Server Error!',
          info:
            'susceptive nonturbinated indoctrination formulary dyskinetic deafforest Strumella frolicsomeness encrustment portia myelination lachrymatory bestain hoople piscator pyramidoidal parter clipt.',
          img: require('@/assets/error-img.png')
        },
        Maintenance: {
          title: 'Under Maintenance!',
          info:
            'paraphonic unassessable foramination Caulopteris worral Spirophyton encrimson esparcet aggerate chondrule restate whistler shallopy biosystematy area bertram plotting unstarting quarterstaff.',
          img: require('@/assets/error-img.png')
        },
        NotAuthorized: {
          title: 'You are not authorized!',
          info:
            'paraphonic unassessable foramination Caulopteris worral Spirophyton encrimson esparcet aggerate chondrule restate whistler shallopy biosystematy area bertram plotting unstarting quarterstaff.',
          img: require('@/assets/error-img.png')
        }
      },
      errorCode: 404
    }
  },
  mounted() {
    this.errorCode = this.$route.meta.title
  }
}
</script>

<style lang="scss" scoped>
.index {
  height: 100%;
  width: 100%;
  background: url('~@/assets/errorPage.png') center center/cover;
  .wrapper {
    height: 100%;
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: Montserrat, Helvetica, Arial, sans-serif;
    font-weight: 400;
    text-align: center;
  }
  .btn {
    font-size: 1.25rem;
  }
}
</style>
