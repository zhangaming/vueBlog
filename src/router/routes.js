export default [
  {
    path: "/",
    // redirect: "/home",
    name: "home",
    meta: {
      title: "首页",
      icon: require("@/assets/image/日历.png")
    },
    component: () => import("@/views/Home")
  },
  {
    path: "*",
    redirect: "/"
  },
  {
    path: "/404",
    name: "notFound",
    component: () => import("@/components/notFound")
  },
  {
    path: "/skill",
    name: "skill",
    meta: {
      title: "学习",
      icon: require("@/assets/image/学习.png")
    },
    component: () => import("@/views/Skill")
  },
  {
    path: "/zone",
    name: "zone",
    meta: {
      title: "Zone",
      icon: require("@/assets/image/星星.png")
    },
    component: () => import("@/views/Zone"),
    children: [
      {
        path: "/",
        component: () => import("@/views/Zone/Acu")
      },
      {
        path: "me",
        component: () => import("@/views/Zone/Me")
      }
    ]
  },
  {
    path: "/article",
    name: "article",
    meta: {
      title: "笔记",
      icon: require("@/assets/image/书.png")
    },
    component: () => import("@/views/Article"),
    children: [
      {
        path: "/",
        component: () => import("@/views/Article/List")
      },
      {
        path: ":id",
        component: () => import("@/views/Article/content/index")
      }
    ]
  },
  {
    path: "/message",
    name: "message",
    meta: {
      title: "留言板",
      icon: require("@/assets/image/留言板.png")
    },
    component: () => import("@/views/Message"),
    children: [
      {
        path: "/",
        component: () => import("@/views/Message/Acu")
      },
      {
        path: "list",
        component: () => import("@/views/Message/List")
      }
    ]
  }
  // {
  //   path: "component",
  //   name: "component",
  //   meta: {
  //     title: "暂无",
  //     icon: require("@/assets/image/蜡笔.png")
  //   }
  //   // component: () => import("@/views/Article")
  // }
];
