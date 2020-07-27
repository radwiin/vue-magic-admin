<template>
  <header class="top-navbar-wrapper">
    <vs-navbar shadow class="top-navbar">
      <template #left>
        <i class="bx bx-grid-alt"></i>
        <i class="bx bxs-music"></i>
        <i class="bx bxl-instagram"></i>
        <i class="bx bxl-twitter"></i>
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
i {
  font-size: 21px;
  padding: 7px;
  opacity: 0.7;
  cursor: pointer;
  transition: all 0.25s ease;
  &:hover {
    padding-bottom: 15px;
    opacity: 1;
  }
}
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
