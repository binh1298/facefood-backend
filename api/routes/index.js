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
    path: '/admin',
    handler: require('./AdminRoutes'),
  },

];

export default Router;