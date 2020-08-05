import PerfectScrollbar from 'perfect-scrollbar'
import 'perfect-scrollbar/css/perfect-scrollbar.css'
export default {
  data() {
    return {
      $_ps_containerName: 'ps-container',
      $_ps_container: null,
      $_ps_instance: null
    }
  },
  mounted() {
    console.info(this.$_ps_containerName)
    this.$_ps_container = this.$refs['ps-container']
    if (this.$_ps_container) {
      this.$_ps_instance = new PerfectScrollbar(this.$_ps_container)
    }
  }
}
