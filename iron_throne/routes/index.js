// const taskRoutes = require('./task');
const authRoutes = require('./auth');
// const labelRoutes = require('./labels');

module.exports = (app) => {
  // app.use("/api/tasks", taskRoutes);
  // // app.use("/api/public", publicRoutes);
  // app.use("/api/labels",labelRoutes);
  app.use('/auth', authRoutes);
};
