import * as express from 'express';
import controller from './controller';

export default express
  .Router()
  .get('/', controller.boards)
  .get('/:abbr', controller.board)
  .get('/:abbr/thread/:threadNo', controller.thread);
