const Router = [
  {
    path: '/',
    handler: require('./RootRoutes'),
  },
  {
    path: '/users',
    handler: require('./UserRoutes'),
  },
  {
    path: '/posts',
    handler: require('./PostRoutes'),
  },
  {
    path: '/comments',
    handler: require('./CommentRoutes'),
  },
  {
    path: '/likes',
    handler: require('./LikeRoutes'),
  },
  // {
  //   path: '/follows',
  //   handler: require('./FollowRoutes'),
  // }

];

export default Router;