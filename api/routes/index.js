const Router = [
  {
    path: '/',
    handler: require('./PublicRoutes'),
  },
  {
    path: '/user',
    handler: require('./UserRoutes'),
  },
  {
    path: '/post',
    handler: require('./PostRoutes'),
  },

];

export default Router;