import PerfectScrollbar from 'perfect-scrollbar'
import 'perfect-scrollbar/css/perfect-scrollbar.css'
export default {
  data: () => ({
    $_ps_instance: null
  }),
  mounted() {
    let container = this.$refs['ps-container']
    if (container) {
      this.$_ps_instance = new PerfectScrollbar(container)
    } else {
      /* TODO: 兼容自定义命名容器 */
    }
  }
}
