import PerfectScrollbar from 'perfect-scrollbar'
import 'perfect-scrollbar/css/perfect-scrollbar.css'
export default {
  data: () => ({
    $_ps_container: null,
    $_ps_instance: null
  }),
  mounted() {
    this.$_ps_container = this.$refs['ps-container']
    if (this.$_ps_container) {
      this.$_ps_instance = new PerfectScrollbar(this.$_ps_container)
    }
  },
  methods: {
    $_ps_scrollTop(scroll = 0) {
      if (this.$_ps_container) {
        this.$_ps_container.scrollTop = scroll
      }
    }
  }
}
