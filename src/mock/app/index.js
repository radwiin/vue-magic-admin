import Mock from 'mockjs'
import menus from '@/mock/data/menus'

Mock.mock('/app/login', 'post', () => ({
  code: 200,
  msg: '操作成功',
  data: {
    token: 'TOKEN_0'
  }
}))

Mock.mock('/app/userInfo', 'post', () => ({
  code: 200,
  msg: '操作成功',
  data: {
    account: 'root',
    roles: ['root'],
    menus
  }
}))
