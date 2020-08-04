const menus = [
  {
    path: '/card',
    component: 'Layout',
    redirect: '/card/statistics',
    meta: { title: 'Card', icon: 'bx bx-credit-card-front', alwaysShow: true },
    children: [
      {
        name: 'statistics',
        path: '/card/statistics',
        component: '/ui/card/statistics',
        meta: { title: 'Statistics', icon: 'bx bx-hash' }
      },
      {
        name: 'analytics',
        path: '/card/analytics',
        component: '/ui/card/analytics',
        meta: { title: 'Analytics', icon: 'bx bx-hash' }
      }
    ]
  },
  {
    path: '/extensions',
    component: 'Layout',
    redirect: '/extensions/quill-editor',
    meta: { title: 'Extensions', icon: 'bx bx-extension', alwaysShow: true },
    children: [
      {
        name: 'quill-editor',
        path: '/extensions/quill-editor',
        component: '/ui/extensions/quill-editor',
        meta: { title: 'Quill Editor', icon: 'bx bx-hash' }
      },
      {
        name: 'access-control',
        path: '/extensions/access-control',
        component: '/ui/extensions/access-control',
        meta: { title: 'Access Control', icon: 'bx bx-hash' }
      }
    ]
  },
  {
    path: '/system',
    component: 'Layout',
    redirect: '/system/menu',
    meta: { title: 'System', icon: 'bx bx-cog' },
    children: [
      {
        name: 'user',
        path: '/system/user',
        component: '/system/user',
        meta: { title: 'User', icon: 'bx bx-hash' }
      },
      {
        name: 'menu',
        path: '/system/menu',
        component: '/system/menu',
        meta: { title: 'Menu', icon: 'bx bx-hash' }
      }
    ]
  }
]

export default menus
