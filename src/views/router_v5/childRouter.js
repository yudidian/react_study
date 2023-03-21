import {lazy} from "react";

const childRouter = [
  {
    path: '/a/a',
    name: 'ChildA',
    component: lazy(() => import('@/views/RouterDome/A1/ChildA')),
    meta: {},
  },
  {
    path: '/a/b',
    name: 'ChildB',
    component: lazy(() => import('@/views/RouterDome/A2/ChildB')),
    meta: {},
  },
  {
    path: '/a/c',
    name: 'ChildC',
    component: lazy(() => import('@/views/RouterDome/A3/ChildC')),
    meta: {},
  },
]
