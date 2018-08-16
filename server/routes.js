import router from './api/controllers/boards/router';

export default function routes(app) {
  app.use('/api/v1/boards', router);
}
