<template>
  <auto-vs-sidebar absolute hover-expand reduce v-model="active" :menus="menus" open style="overflow: hidden;">
    <template #logo>
      <header class="header">
        <svg-icon icon-class="vue" class-name="logo" />
        <span class="title">Vue Magic Admin</span>
      </header>
    </template>
    <template #footer>
      <vs-row justify="space-between" style="padding: 0 3px">
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
  </auto-vs-sidebar>
</template>

<script>
import AutoVsSidebar from './AutoVsSidebar'
import { mapGetters } from 'vuex'
import { isExternal } from '@/utils/validate'
export default {
  name: 'AsideMenu',
  components: {
    AutoVsSidebar
  },
  data() {
    return {
      active: this.$route.name
    }
  },
  computed: {
    ...mapGetters(['routes']),
    menus() {
      return this.routes.map(route => this.toMenu(route))
    }
  },
  methods: {
    toMenu(route) {
      const checkHidden = it => it.meta && it.meta.hidden
      const checkAlwaysShow = it => it.meta && it.meta.alwaysShow
      const checkLeaf = it => !it.children
      const checkLink = it => it.meta && it.meta.link
      const isHidden = checkHidden(route)
      const isAlwaysShow = checkAlwaysShow(route)
      const isLeaf = checkLeaf(route)
      const isLink = checkLink(route)
      const visibleChildren = isLeaf ? [] : route.children.filter(child => !checkHidden(child))
      const hasVisibleChildren = visibleChildren.length > 0
      const hasOnlyOneVisibleChildren = visibleChildren.length === 1
      // 对于设置隐藏的路由，不显示其菜单
      if (isHidden) {
        return null
      }
      // 以下是对要显示的路由进行的逻辑处理，暂不支持外链
      if (hasVisibleChildren && (!hasOnlyOneVisibleChildren || isAlwaysShow)) {
        // 存在可见子节点，且要么有一个以上的子节点，要么只有一个子节点但设置alwaysShow属性。此时渲染为submenu
        return {
          icon: route.meta.icon,
          text: route.meta.title,
          children: route.children.map(this.toMenu)
        }
      } else if (hasVisibleChildren && hasOnlyOneVisibleChildren) {
        // 存在可见子节点，但只有一个节点且没有设置alwaysShow属性。此时默认将path传入子节点，且只渲染子节点
        return this.toMenu(visibleChildren[0])
      } else {
        // 不存在可见子节点。此时渲染为menu-item
        let path = route.path
        if (!isExternal(path) && isLink) {
          path = `${window.location.origin}/#${path}`
        }
        return {
          id: route.name,
          to: isExternal(path) ? undefined : path,
          href: isExternal(path) ? path : undefined,
          icon: route.meta.icon,
          text: route.meta.title
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 100%;
  display: flex;
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
