<template>
  <component :is="currentLayout"></component>
</template>

<script>
import SideLayout from './SideLayout'
import TopLayout from './TopLayout'
import { mapState } from 'vuex'

export default {
  name: 'Layout',
  components: {
    SideLayout,
    TopLayout
  },
  data: () => ({
    currentLayout: 'SideLayout'
  })
  // computed: {
  //   ...mapState({
  //     layout: state => state.settings.layout
  //   })
  // }
}
</script>
