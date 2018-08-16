import axios from 'axios';
import l from '../../common/logger';

class BoardsService {
  boards() {
    l.info(`${this.constructor.name}.boards()`);
    return new Promise((resolve, reject) => {
      axios.get('https://a.4cdn.org/boards.json')
        .then(response => {
          console.log(response.data);
          resolve(response.data);
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
  }
  board(abbr) {
    l.info(`${this.constructor.name}.board() ${abbr}`);
    return new Promise((resolve, reject) => {
      axios.get(`https://a.4cdn.org/${abbr}/1.json`)
        .then(response => {
          console.log(response.data);
          resolve(response.data);
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
  }
  thread(abbr, threadNo) {
    l.info(`${this.constructor.name}.thread() ${abbr} ${threadNo}`);
    return new Promise((resolve, reject) => {
      axios.get(`https://a.4cdn.org/${abbr}/thread/${threadNo}.json`)
        .then(response => {
          console.log(response.data);
          resolve(response.data);
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
  }
}

export default new BoardsService();
