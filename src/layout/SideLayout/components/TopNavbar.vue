<template>
  <header class="top-navbar-wrapper">
    <vs-navbar shadow class="top-navbar">
      <template #left>
        <i class="bx bx-grid-alt" style="font-size:21px;padding:7px"></i>
        <i class="bx bxs-music" style="font-size:21px;padding:7px"></i>
        <i class="bx bxl-instagram" style="font-size:21px;padding:7px"></i>
        <i class="bx bxl-twitter" style="font-size:21px;padding:7px"></i>
      </template>
      <template #right>
        <vs-button flat>Login</vs-button>
        <vs-button>Get Started</vs-button>
      </template>
    </vs-navbar>
  </header>
</template>

<script>
export default {
  name: 'TopNavbar'
}
</script>

<style lang="scss" scoped>
.top-navbar-wrapper {
  position: absolute;
  z-index: 9000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: linear-gradient(180deg, hsla(0, 0%, 97.3%, 0.95) 44%, hsla(0, 0%, 97.3%, 0.46) 73%, hsla(0, 0%, 100%, 0));
}
.top-navbar {
  border-radius: 0.5rem;
  top: 15px;
  left: 15px;
  right: 15px;
  width: calc(100% - 30px);

  ::v-deep .vs-navbar {
    height: 55px;
  }
}
</style>
