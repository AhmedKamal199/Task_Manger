const Task = require('../Models/Task')
const asyncWrapper = require('../middleware/async');

const getAllTasks = asyncWrapper(async(req,res)=>{
		const tasks = await Task.find({})
		res.status(200).json({tasks})
}
)
const createTask =asyncWrapper(async(req,res)=>{
		const task = await Task.create(req.body) 
	    res.status(201).json({task}) 
}
) 
const getTask = async(req,res)=>{
	try{
		const task = await Task.findOne(req.params);
		res.status(201).json({task});
	}catch(err){
		res.status(500).json({msg:err})
	}

}
const updateTask = async(req,res)=>{
	try{
		const { id: taskID } = req.params;
		const task = await Task.findOneAndDelete({_id: taskID});
		res.status(201).json({task});
	}catch(err){
		res.status(500).json({msg:err})
	}
}
const deleteTask = async(req,res)=>{
	try{
		const { id: taskID } = req.params;
		const task = await Task.findOneAndDelete({_id: taskID});
		res.status(201).json({task});
	}catch(err){
		res.status(500).json({msg:err})
	}
}
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}
