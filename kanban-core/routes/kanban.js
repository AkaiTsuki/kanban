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
  processing: {
    title: "Processing",
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

function addNewTask(req){
  var newTask = req.task;
  newTask.id = uuid.v4();
  var target = req.target;
  board[target].tasks.unshift(newTask);
}

/* GET users listing. */
router.get('/board', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
  setTimeout(function(){
      res.json(board);
  }, 5000);
});

router.post('/board', function(req, res, next){
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

  setTimeout(function(){
    console.log(req.body);
    addNewTask(req.body);
    res.json(board);
  }, 3000);
});

module.exports = router;
