import {lazy} from 'react'

const routers = [
  {
    redirect: true,
    form: '/',
    to: '/a',
    exact: true
  },
  {
    path: '/a',
    name: 'DomeA',
    component: lazy(() => import('@/views/RouterDome/DomeA')),
    meta: {},
  },
  {
    path: '/b',
    name: 'DomeB',
    component: lazy(() => import('@/views/RouterDome/DomeB')),
    meta: {},
  },
  {
    path: '/c',
    name: 'DomeC',
    component: lazy(() => import('@/views/RouterDome/DomeC')),
    meta: {},
  }
]
export default routers
