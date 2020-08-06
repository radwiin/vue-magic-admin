<template>
  <div class="layout">
    <aside-menu />
    <div class="page">
      <top-navbar></top-navbar>
      <transition name="fade-transform" mode="out-in">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import AsideMenu from './components/AsideMenu'
import TopNavbar from './components/TopNavbar'
export default {
  name: 'SideLayout',
  components: { AsideMenu, TopNavbar }
}
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
  position: relative;

  .page {
    height: 100%;
    margin-left: 50px;
    position: relative;
    overflow: hidden;
  }
}
</style>
