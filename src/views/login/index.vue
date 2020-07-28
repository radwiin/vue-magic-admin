<template>
  <div class="page-container">
    <user-login-dialog></user-login-dialog>
  </div>
</template>

<script>
import UserLoginDialog from './components/UserLoginDialog'
export default {
  name: 'login',
  components: {
    UserLoginDialog
  },
  data: () => ({
    active: true
  })
}
</script>

<style lang="scss" scoped>
.page-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('~@/assets/login-bg.jpg') center center/cover;
}
</style>
