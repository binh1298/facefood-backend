const Router = [
  {
    path: '/',
    handler: require('./PublicRoutes'),
  },
  {
    path: '/user',
    handler: require('./UserRoutes'),
  },
];

export default Router;