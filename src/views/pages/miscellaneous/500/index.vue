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
  name: '500',
  data() {
    return {
      error: {
        500: {
          title: 'Internal Server Error!',
          info:
            'susceptive nonturbinated indoctrination formulary dyskinetic deafforest Strumella frolicsomeness encrustment portia myelination lachrymatory bestain hoople piscator pyramidoidal parter clipt.',
          img: require('@/assets/error-img.png')
        }
      },
      errorCode: 500
    }
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
  img {
    width: 36vw;
  }
  .btn {
    padding: 8px 12px;
    font-size: 1.25rem;
  }
}
</style>
