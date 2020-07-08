<template>
  <div class="center examplex">
    <vs-navbar padding-scroll fixed center-collapsed shadowScroll v-model="active">
      <template #left>
        <img src="@/assets/logo.png" alt="" style="height: 20px" />
        <span>Vue Magic Admin</span>
      </template>

      <vs-navbar-group>
        Docs
        <template #items>
          <vs-navbar-item :active="active == 'guide'" id="guide">
            Guide
          </vs-navbar-item>
          <vs-navbar-item :active="active == 'docs'" id="docs">
            Documents
          </vs-navbar-item>
          <vs-navbar-item :active="active == 'components'" id="components">
            Components
          </vs-navbar-item>
        </template>
      </vs-navbar-group>

      <vs-navbar-group>
        Ecosystem
        <template #items>
          <h5 class="title">
            Social
          </h5>
          <vs-navbar-item :active="active == 'Github'" id="Github">
            Github
          </vs-navbar-item>
          <vs-navbar-item :active="active == 'Discord'" id="Discord">
            Discord
          </vs-navbar-item>
          <vs-navbar-item :active="active == 'Twitter'" id="Twitter">
            Twitter
          </vs-navbar-item>
          <vs-navbar-item :active="active == 'Medium'" id="Medium">
            Medium
          </vs-navbar-item>
        </template>
      </vs-navbar-group>

      <vs-navbar-item :active="active == 'License'" id="License">
        License
      </vs-navbar-item>

      <template #right>
        <vs-button flat>Login</vs-button>
        <vs-button>Get Started</vs-button>
      </template>
    </vs-navbar>
    <div id="padding-scroll-content" class="square">
      <div class="child">
        child 1
      </div>
      <div class="child">
        child 2
      </div>
      <div class="child">
        child 3
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data: () => ({
    active: 'guide'
  })
}
</script>

<style lang="scss" scoped>
.title {
  text-align: left;
  margin: 0;
  width: 100%;
  padding: 5px 6px;
}

.square {
  position: relative;
  background: #f4f7f8;
}

.square .child {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 400px;
  width: 100%;
}
</style>
