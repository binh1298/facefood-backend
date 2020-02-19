const Router = [
  {
    path: '/',
    handler: require('./RootRoutes'),
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