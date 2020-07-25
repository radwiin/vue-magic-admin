<template>
  <vs-sidebar absolute hover-expand reduce v-model="active" open style="overflow: hidden;">
    <template #logo>
      <header class="header">
        <svg-icon icon-class="vue" class-name="logo" />
        <span class="title">Vue Magic Admin</span>
      </header>
    </template>
    <vs-sidebar-item id="home">
      <template #icon>
        <i class="bx bx-home"></i>
      </template>
      Home
    </vs-sidebar-item>
    <vs-sidebar-item id="market">
      <template #icon>
        <i class="bx bx-grid-alt"></i>
      </template>
      Market Overview
    </vs-sidebar-item>
    <vs-sidebar-item id="Music">
      <template #icon>
        <i class="bx bxs-music"></i>
      </template>
      Music
    </vs-sidebar-item>
    <vs-sidebar-group>
      <template #header>
        <vs-sidebar-item arrow>
          <template #icon>
            <i class="bx bx-group"></i>
          </template>
          Social media
        </vs-sidebar-item>
      </template>

      <vs-sidebar-item id="Instagram">
        <template #icon>
          <i class="bx bxl-instagram"></i>
        </template>
        Instagram
      </vs-sidebar-item>
      <vs-sidebar-item id="twitter">
        <template #icon>
          <i class="bx bxl-twitter"></i>
        </template>
        Twitter
      </vs-sidebar-item>
      <vs-sidebar-item id="Facebook">
        <template #icon>
          <i class="bx bxl-facebook"></i>
        </template>
        Facebook
      </vs-sidebar-item>
    </vs-sidebar-group>
    <vs-sidebar-group>
      <template #header>
        <vs-sidebar-item arrow>
          <template #icon>
            <i class="bx bx-code-alt"></i>
          </template>
          Coding
        </vs-sidebar-item>
      </template>

      <vs-sidebar-item id="github">
        <template #icon>
          <i class="bx bxl-github"></i>
        </template>
        Github
      </vs-sidebar-item>
      <vs-sidebar-item id="codepen">
        <template #icon>
          <i class="bx bxl-codepen"></i>
        </template>
        Codepen
      </vs-sidebar-item>
      <vs-sidebar-item id="discord">
        <template #icon>
          <i class="bx bxl-discord"></i>
        </template>
        Discord
      </vs-sidebar-item>
      <vs-sidebar-item id="Javascript">
        <template #icon>
          <i class="bx bxl-javascript"></i>
        </template>
        Javascript
      </vs-sidebar-item>
      <vs-sidebar-item id="git">
        <template #icon>
          <i class="bx bxl-git"></i>
        </template>
        Git
      </vs-sidebar-item>
    </vs-sidebar-group>
    <vs-sidebar-item id="donate">
      <template #icon>
        <i class="bx bxs-donate-heart"></i>
      </template>
      Donate
    </vs-sidebar-item>
    <vs-sidebar-item id="drink">
      <template #icon>
        <i class="bx bx-drink"></i>
      </template>
      Drink
    </vs-sidebar-item>
    <vs-sidebar-item id="shopping">
      <template #icon>
        <i class="bx bxs-shopping-bags"></i>
      </template>
      Shopping
    </vs-sidebar-item>
    <vs-sidebar-item id="chat">
      <template #icon>
        <i class="bx bx-chat"></i>
      </template>
      Chat
    </vs-sidebar-item>
    <template #footer>
      <vs-row justify="space-between">
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
  </vs-sidebar>
</template>

<script>
export default {
  name: 'AsideMenu',
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
  // justify-content: center;
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
