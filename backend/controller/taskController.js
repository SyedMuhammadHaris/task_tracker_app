const Task = require('../models/taskModel');
const mongoose = require('mongoose');

const getAllTask = async(req,res)=>{
    
    const tasks = await Task.find({}).sort({createdAt: -1});
    res.status(200).json(tasks);
}

const addNewTask = async(req,res)=>{
    const {title,description,completed} = req.body;

    try {
        const task = await Task.create({title,description,completed})
        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({error:error.message})
    }

}

const updateTask = async (req,res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such task'})
    }
  
    const task = await Task.findOneAndUpdate({_id: id},{
        ...req.body
    });
  
    if (!task) {
      return res.status(400).json({error: 'No such task'});
    }
  
    res.status(200).json(task);
}

const deleteTask = async(req,res)=>{
     const { id } = req.params

     if (!mongoose.Types.ObjectId.isValid(id)) {
       return res.status(404).json({error: 'No such task'})
     }
   
     const task = await Task.findOneAndDelete({_id: id})
   
     if (!task) {
       return res.status(400).json({error: 'No such workout'})
     }
   
     res.status(200).json(task);
}
module.exports = {
    getAllTask,
    addNewTask,
    updateTask,
    deleteTask
}