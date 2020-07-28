<script>
import _ from 'lodash'
import path from 'path'
export default {
  name: 'AutoAsideMenu',
  inheritAttrs: false,
  props: {
    data: {
      type: Array,
      default: () => [
        {
          id: 'home',
          to: '/home',
          icon: 'bx bx-home',
          text: 'Home'
        },
        {
          id: 'market',
          icon: 'bx bx-grid-alt',
          text: 'Market Overview'
        },
        {
          icon: 'bx bx-group',
          text: 'Social media',
          children: [
            {
              id: 'Instagram',
              icon: 'bx bxl-instagram',
              text: 'Instagram'
            },
            {
              id: 'Twitter',
              icon: 'bx bxl-twitter',
              text: 'Twitter'
            },
            {
              id: 'Facebook',
              icon: 'bx bxl-facebook',
              text: 'Facebook'
            }
          ]
        },
        {
          icon: 'bx bx-code-alt',
          text: 'Coding',
          children: [
            {
              id: 'github',
              icon: 'bx bxl-github',
              text: 'Github'
            },
            {
              id: 'Codepen',
              icon: 'bx bxl-codepen',
              text: 'Codepen'
            },
            {
              id: 'Discord',
              icon: 'bx bxl-discord',
              text: 'Discord'
            },
            {
              id: 'Javascript',
              icon: 'bx bxl-javascript',
              text: 'Javascript'
            },
            {
              id: 'git',
              icon: 'bx bxl-git',
              text: 'Git'
            }
          ]
        },
        {
          id: 'donate',
          icon: 'bx bxs-donate-heart',
          text: 'Donate'
        },
        {
          id: 'Drink',
          icon: 'bx bx-drink',
          text: 'Drink'
        },
        {
          id: 'Shopping',
          icon: 'bx bxs-shopping-bags',
          text: 'Shopping'
        },
        {
          id: 'chat',
          icon: 'bx bx-chat',
          text: 'Chat'
        }
      ]
    }
  },
  data() {
    return {
      theMenu: _.cloneDeep(this.data)
    }
  },
  render(h) {
    return h(
      'vs-sidebar',
      {
        props: this.$attrs,
        on: this.$listeners
      },
      [...Object.keys(this.$slots).map(key => h('template', { slot: key }, this.$slots[key])), ...this.theMenu.map(item => this.menuItem(h, item))]
    )
  },
  methods: {
    menuItem(h, item) {
      const checkHasChildren = it => !!it.children
      const hasChildren = checkHasChildren(item)
      if (hasChildren) {
        // vs-sidebar-group
        return h('vs-sidebar-group', [
          h(
            'template',
            {
              slot: 'header'
            },
            [
              h(
                'vs-sidebar-item',
                {
                  props: {
                    arrow: true
                  }
                },
                [
                  h(
                    'template',
                    {
                      slot: 'icon'
                    },
                    [h('i', { class: item.icon })]
                  ),
                  item.text
                ]
              )
            ]
          ),
          ...item.children.map(child => {
            const theChild = _.cloneDeep(child)
            return this.menuItem(h, theChild)
          })
        ])
      } else {
        // vs-sidebar-item
        return h(
          'vs-sidebar-item',
          {
            props: item
          },
          [
            h(
              'template',
              {
                slot: 'icon'
              },
              [h('i', { class: item.icon })]
            ),
            item.text
          ]
        )
      }

      const checkHidden = it => it.meta && it.meta.hidden
      const checkAlwaysShow = it => it.meta && it.meta.alwaysShow
      const checkLeaf = it => !it.children
      const isHidden = checkHidden(item)
      const isAlwaysShow = checkAlwaysShow(item)
      const isLeaf = checkLeaf(item)
      const visibleChildren = isLeaf ? [] : item.children.filter(child => !checkHidden(child))
      const hasVisibleChildren = visibleChildren.length > 0
      const hasOnlyOneVisibleChildren = visibleChildren.length === 1

      // 对于设置隐藏的路由，不显示其菜单
      if (isHidden) {
        return null
      }

      // 以下是对要显示的路由进行的逻辑处理，暂不支持外链
      if (hasVisibleChildren && (!hasOnlyOneVisibleChildren || isAlwaysShow)) {
        // 存在可见子节点，且要么有一个以上的子节点，要么只有一个子节点但设置alwaysShow属性。此时渲染为el-submenu
        return h(
          'el-submenu',
          {
            props: {
              index: item.path,
              'popper-class': 'r-popper-class'
            }
          },
          [
            h(
              'template',
              {
                slot: 'title'
              },
              [
                h('svg-icon', {
                  props: {
                    'icon-class': item.meta.icon
                  }
                }),
                h(
                  'span',
                  {
                    slot: 'title'
                  },
                  item.meta.title
                )
              ]
            ),
            ...item.children.map(child => {
              const theChild = _.cloneDeep(child)
              theChild.path = path.resolve(item.path, theChild.path)
              return this.menuItem(h, theChild)
            })
          ]
        )
      } else if (hasVisibleChildren && hasOnlyOneVisibleChildren) {
        // 存在可见子节点，但只有一个节点且没有设置alwaysShow属性。此时默认将path传入子节点，且只渲染子节点
        const theOnlyOneVisibleChild = _.cloneDeep(visibleChildren[0])
        theOnlyOneVisibleChild.path = path.resolve(item.path, theOnlyOneVisibleChild.path)
        return this.menuItem(h, theOnlyOneVisibleChild)
      } else {
        // 不存在可见子节点。此时渲染为el-menu-item
        return h(
          'el-menu-item',
          {
            props: {
              index: item.path
            }
          },
          [
            h('svg-icon', {
              props: {
                'icon-class': item.meta.icon
              }
            }),
            h(
              'span',
              {
                slot: 'title'
              },
              item.meta.title
            )
          ]
        )
      }
    }
  }
}
</script>
