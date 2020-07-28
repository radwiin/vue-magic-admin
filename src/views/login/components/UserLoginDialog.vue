<template>
  <vs-dialog prevent-close not-close blur v-model="active" :loading="loading">
    <template #header>
      <h4 class="not-margin"><b>Vue Magic Admin</b></h4>
    </template>

    <div class="con-form">
      <vs-input v-model="loginForm.account" placeholder="Account" block>
        <template #icon>
          @
        </template>
      </vs-input>
      <vs-input type="password" v-model="loginForm.password" placeholder="Password" block>
        <template #icon>
          <i class="bx bxs-lock"></i>
        </template>
      </vs-input>
      <div class="flex">
        <vs-checkbox v-model="remember">Remember me</vs-checkbox>
        <a href="#">Forgot Password?</a>
      </div>
    </div>

    <template #footer>
      <div class="footer-dialog">
        <vs-button block @click.native.prevent="handleLogin">
          Login
        </vs-button>

        <div class="new">New Here? <a href="#">Create New Account</a></div>
      </div>
    </template>
  </vs-dialog>
</template>
<script>
export default {
  name: 'UserLoginDialog',
  data: () => ({
    active: false,
    loading: false,
    loginForm: {
      account: '',
      password: ''
    },
    remember: false
  }),
  mounted() {
    this.active = true
  },
  methods: {
    handleLogin() {
      this.loading = true
      this.$store
        .dispatch('app/login', this.loginForm)
        .then(() => {
          this.$router.push({ path: '/' }).catch(err => err)
        })
        .catch(err => {
          this.loading = false
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.not-margin {
  margin: 0px;
  font-weight: normal;
  padding: 10px;
}

.con-form {
  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      font-size: 0.8rem;
      opacity: 0.7;

      &:hover {
        opacity: 1;
      }
    }
  }

  ::v-deep .vs-checkbox-label {
    font-size: 0.8rem;
  }

  ::v-deep .vs-input-content {
    margin: 10px 0px;
  }
}

.footer-dialog {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  .new {
    margin: 0px;
    margin-top: 20px;
    padding: 0px;
    font-size: 0.7rem;
    a {
      color: rgba(var(--vs-primary), 1);
      margin-left: 6px;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  ::v-deep .vs-button {
    margin: 0px;
  }
}
</style>
