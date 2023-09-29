
const routes = [
  {
    path: '/',
    component: () => import('pages/IndexPage.vue'),
    meta:{
      title:'Home',
    },
    icon:'home',
    visible:false,
  },
  {
    path: '/dashboard',
    name:'dashboard',
    component: () => import('pages/TestPage.vue'),
    meta:{
      title:'Dashboard',
    },
    icon:'dashboard',
    visible:true,
  },
  {
    path: '/myPCR',
    component: () => import('pages/TestPages.vue'),
    meta:{
      title:'My PCR',
    },
    icon:'person',
    visible:true,
  },
  {
    path: '/office',
    component: () => import('pages/TestPages.vue'),
    meta:{
      title:'Office',
    },
    icon:'domain',
    visible:true,
    children:[
      {
        path: '/members',
        component: () => import('pages/TestPage.vue'),
        meta:{
          title:'Members',
        },
        icon:'groups',
        visible:true,
      },
      {
        path: '/preassessments',
        component: () => import('pages/TestPage.vue'),
        meta:{
          title:'Pre Assessments',
        },
        icon:'subject',
        visible:true,
      },
    ],
  },
  {
    path: '/sysadm',
    component: () => import('pages/sysAdmin/SysAdmin.vue'),
    meta:{
      title:'System Admin',
    },
    icon:'settings',
    visible:true,
    children:[
      {
        path: '/user',
        component: () => import('pages/sysAdmin/UserMgt.vue'),
        meta:{
          title:'Users',
        },
        icon:'manage_accounts',
        visible:true,
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    name:'catchAll',
    component: () => import('pages/ErrorNotFound.vue'),
    meta:{
      title:'tests',
    },
    icon:'error',
    visible:false,
  },
  {
    path: '/signIn',
    name:'signIn',
    component: () => import('pages/LandingPage.vue'),
    meta:{
      title:'Sign In',
    },
    visible:false,
  }
]

export default routes

/**
 * for icons sets
 *  https://material.io/icons/
 */
