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
  return newTask;
}

function updateTask(payload){
  var target = payload.target;
  var updatedTask;
  board[target].tasks = board[target].tasks.map(function(task){
    if(task.id === payload.id){
      updatedTask = {
        id: task.id,
        job: payload.text
      };
      return updatedTask;
    } else {
      return task;
    }
  });
  return updatedTask;
}

function deleteTask(payload){
  board[payload.target].tasks = board[payload.target].tasks.filter(function(task){
    return task.id !== payload.taskId;
  });
  return payload.taskId;
}

/* GET users listing. */
router.get('/board', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  setTimeout(function(){
      res.json(board);
  }, 100);
});

router.post('/board', function(req, res, next){
  setTimeout(function(){
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log(req.body);
    var savedTask = addNewTask(req.body);
    console.log(savedTask);
    res.json(savedTask);
  }, 100);
});

router.put('/board', function(req, res, next){
  setTimeout(function(){
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log(req.body);
    var updatedTask = updateTask(req.body);
    res.json(updatedTask);
  }, 100);
});

router.delete('/board', function(req, res, next){
  setTimeout(function(){
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log(req.body);
    var id = deleteTask(req.body);
    res.json({id: id});
  }, 100);
});


module.exports = router;
