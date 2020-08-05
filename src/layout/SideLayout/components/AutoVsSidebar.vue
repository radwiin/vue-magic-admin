<script>
export default {
  name: 'AutoVsSidebar',
  inheritAttrs: false,
  props: {
    menus: {
      type: Array,
      required: true
    }
  },
  render(h) {
    return h(
      'vs-sidebar',
      {
        props: this.$attrs,
        on: this.$listeners
      },
      [
        ...Object.keys(this.$slots).map(key =>
          h(
            'template',
            {
              slot: key
            },
            this.$slots[key]
          )
        ),
        ...this.menus.map(menu => this.renderMenu(h, menu))
      ]
    )
  },
  methods: {
    renderMenu(h, menu) {
      if (!menu) {
        return null
      }
      const checkHasChildren = it => !!it.children
      const hasChildren = checkHasChildren(menu)
      if (hasChildren) {
        return h('vs-sidebar-group', [
          h('template', { slot: 'header' }, [
            h('vs-sidebar-item', { props: { arrow: true } }, [
              h(
                'template',
                {
                  slot: 'icon'
                },
                [h('i', { class: menu.icon })]
              ),
              menu.text
            ])
          ]),
          ...menu.children.map(child => {
            return this.renderMenu(h, child)
          })
        ])
      } else {
        return h(
          'vs-sidebar-item',
          {
            props: menu
          },
          [
            h(
              'template',
              {
                slot: 'icon'
              },
              [h('i', { class: menu.icon })]
            ),
            menu.text
          ]
        )
      }
    }
  }
}
</script>
