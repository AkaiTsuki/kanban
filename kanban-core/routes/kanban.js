var express = require('express');
var router = express.Router();
var uuid = require('node-uuid');

var board = {
  backlog: {
    title: "BackLog",
    tasks: [
      {
        id: uuid.v4(),
        job: 'Backlog Task 1'
      },
      {
        id: uuid.v4(),
        job: 'Backlog Task 2, add new search feature for important customers'
      }
    ]
  },
  open: {
    title: "Open",
    tasks: [
      {
        id: uuid.v4(),
        job: 'Opened task'
      }
    ]
  },
  inProcess: {
    title: "In Process",
    tasks: [
      {
        id: uuid.v4(),
        job: 'In process task'
      }
    ]
  },
  done: {
    title: "Done",
    tasks: [
      {
        id: uuid.v4(),
        job: 'Finished Task'
      }
    ]
  }
};


/* GET users listing. */
router.get('/board', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

  res.json(board);
});

module.exports = router;
