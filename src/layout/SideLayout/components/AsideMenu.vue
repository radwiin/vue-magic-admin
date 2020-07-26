<template>
  <auto-aside-menu absolute hover-expand reduce v-model="active" open style="overflow: hidden;">
    <template #logo>
      <header class="header">
        <svg-icon icon-class="vue" class-name="logo" />
        <span class="title">Vue Magic Admin</span>
      </header>
    </template>
    <template #footer>
      <vs-row justify="space-between" style="padding: 0 3px">
        <vs-avatar badge-color="danger" badge-position="top-right">
          <i class="bx bx-bell"></i>

          <template #badge>
            28
          </template>
        </vs-avatar>

        <vs-avatar>
          <img src="@/assets/avatar.jpg" alt="" />
        </vs-avatar>
      </vs-row>
    </template>
  </auto-aside-menu>
</template>

<script>
import AutoAsideMenu from './AutoAsideMenu'
export default {
  name: 'AsideMenu',
  components: {
    AutoAsideMenu
  },
  data: () => ({
    active: 'home'
  })
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;

  .logo {
    flex: 0 0 auto;
    width: 50px !important;
    height: 20px !important;
    color: #000;
  }

  .title {
    flex: 0 1 auto;
    font-size: 1.1rem;
    white-space: nowrap;
  }
}
</style>
