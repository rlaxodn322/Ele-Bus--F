export const routes = [
  {
    router: '/',
    default: '/icons/sidebar/dashboard_active.svg',
    active: '/icons/sidebar/dashboard_default.svg',
    name: '메인',
  },
  // {
  //   router: '/auth/bus',
  //   active: '/icons/sidebar/bus-svgrepo-com (6).svg',
  //   default: '/icons/sidebar/bus-svgrepo-com (3).svg',
  //   name: 'Bus',
  // },
  {
    router: '/auth/car',
    active: '/icons/sidebar/error-16-svgrepo-com (1).svg',
    default: '/icons/sidebar/error-16-svgrepo-com.svg',
    name: '차량 조회관리',
  },

  {
    router: '/auth/company',
    active: '/icons/sidebar/company-svgrepo-com (1).svg',
    default: '/icons/sidebar/company-svgrepo-com.svg',
    name: '사업자 조회관리',
  },

  // {
  //   router: '/auth/service',
  //   active: '/icons/sidebar/service-svgrepo-com (1).svg',
  //   default: '/icons/sidebar/service-svgrepo-com (2).svg',
  //   name: 'Service',
  // },
  {
    router: '/auth/as',
    active: '/icons/sidebar/service-svgrepo-com (4).svg',
    default: '/icons/sidebar/service-svgrepo-com (3).svg',
    name: 'A/S및 부품관리',
  },
  {
    router: '/auth/login',
    active: '/icons/sidebar/user_active.svg',
    default: '/icons/sidebar/user_default.svg',
    name: 'Login',
  },
  {
    router: '/auth/car/event',
    active: '/icons/sidebar/service-svgrepo-com (4).svg',
    default: '/icons/sidebar/service-svgrepo-com (3).svg',
    name: '부품교체이력',
  },
];
