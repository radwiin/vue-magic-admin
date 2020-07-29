const menus = [
  {
    name: 'component',
    path: '/component',
    component: 'Layout',
    redirect: '/component/card',
    meta: { title: 'Component', icon: 'bx bxs-component', alwaysShow: true },
    children: [
      {
        name: 'card',
        path: '/component/card',
        component: '/component/card',
        meta: { title: 'Card', icon: 'bx bx-credit-card-front' }
      }
    ]
  },
  {
    name: 'system',
    path: '/system',
    component: 'Layout',
    redirect: '/system/menu',
    meta: { title: 'System', icon: 'bx bx-cog' },
    children: [
      {
        name: 'user',
        path: '/system/user',
        component: '/system/user',
        meta: { title: 'User', icon: 'bx bx-user-pin' }
      },
      {
        name: 'menu',
        path: '/system/menu',
        component: '/system/menu',
        meta: { title: 'Menu', icon: 'bx bx-food-menu' }
      }
    ]
  }
]

export default menus
