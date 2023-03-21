import DomeA from "@/views/RouterDome_V6/DomeA";
import {Navigate} from "react-router-dom"
import {lazy} from "react";

const routes = [
  {
    path: "/",
    component: () => <Navigate to="/a/childA"></Navigate>
  },
  {
    path: "/a",
    name: "DomeA",
    component: DomeA,
    meta:{},
    children: [
      {
        path: "/a/childA",
        name: "ChildA",
        component: lazy(()=> import("@/views/RouterDome/A1/ChildA")),
        meta:{}
      },
      {
        path: "/a/childB",
        name: "childB",
        component: lazy(()=> import("@/views/RouterDome/A3/ChildC")),
        meta:{}
      },
      {
        path: "/a/childC",
        name: "childC",
        component: lazy(()=> import("@/views/RouterDome/A3/ChildC")),
        meta:{}
      },
    ]
  },
  {
    path: "/b",
    name: "DomeA",
    component: lazy(()=> import("@/views/RouterDome_V6/DomeB")),
    meta:{}
  },
  {
    path: "/c",
    name: "DomeC",
    component: lazy(()=> import("@/views/RouterDome_V6/DomeC")),
    meta:{}
  }
]
export default routes
