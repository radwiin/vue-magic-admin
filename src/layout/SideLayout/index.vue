<template>
  <div class="layout">
    <aside-menu />
    <div class="main">
      <top-navbar></top-navbar>
      <ps-container class="router-container" ref="router-container">
        <router-view />
      </ps-container>
    </div>
  </div>
</template>

<script>
import AsideMenu from './components/AsideMenu'
import TopNavbar from './components/TopNavbar'
export default {
  name: 'SideLayout',
  components: { AsideMenu, TopNavbar },
  data: () => ({}),
  watch: {
    $route() {
      if (this.$refs['router-container']) {
        this.$refs['router-container'].$_ps_scrollTop()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
  position: relative;

  .main {
    height: 100%;
    margin-left: 50px;
    position: relative;

    .router-container {
      padding: 100px 30px 0;
    }
  }
}
</style>
