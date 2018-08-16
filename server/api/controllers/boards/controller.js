import BoardsService from '../../services/boards.service';

export class Controller {
  boards(req, res) {
    console.log('boards');
    return BoardsService.boards()
      .then(r => res.json(r));
  }
  board(req, res) {
    console.log('board');
    return BoardsService.board(req.params.abbr)
      .then(r => res.json(r));
  }
  thread(req, res) {
    console.log('thread');
    return BoardsService.thread(req.params.abbr, req.params.threadNo)
      .then(r => res.json(r));
  }
}
export default new Controller();
