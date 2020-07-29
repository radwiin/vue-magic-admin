const menus = [
  {
    name: 'component',
    path: '/component',
    component: 'Layout',
    redirect: '/component/card',
    meta: { title: 'Component', icon: 'bx bx-code-alt', alwaysShow: true },
    children: [
      {
        name: 'card',
        path: '/component/card',
        component: '/component/card',
        meta: { title: 'Card', icon: 'bx bx-code-alt' }
      }
    ]
  },
  {
    name: 'system',
    path: '/system',
    component: 'Layout',
    redirect: '/system/menu',
    meta: { title: 'System', icon: 'bx bx-code-alt' },
    children: [
      {
        name: 'user',
        path: '/system/user',
        component: '/system/user',
        meta: { title: 'User', icon: 'bx bx-code-alt' }
      },
      {
        name: 'menu',
        path: '/system/menu',
        component: '/system/menu',
        meta: { title: 'Menu', icon: 'bx bx-code-alt' }
      }
    ]
  }
]

export default menus
