const express = require('express');
const router = express.Router();
const {getAllTask,
    addNewTask,
    updateTask,
    deleteTask
} 

= require('../controller/taskController.js');

//Get All Task Route
router.get('/',getAllTask);

//Add New Task
router.post('/',addNewTask);

//Update task
router.patch('/:id', updateTask);

//Delete task
router.delete('/:id',deleteTask);


module.exports = router;