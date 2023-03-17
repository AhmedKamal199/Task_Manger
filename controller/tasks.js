const Task = require('../Models/Task')
const asyncWrapper = require('../middleware/async');
const { createNewError, customError } = require('../errors/custorm-error')

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
const getTask = asyncWrapper(async(req,res, next)=>{
		const {id: taskID} = req.params
		const task = await Task.findOne({_id: taskID});
		if(!task){
			return next(createNewError(`No task with ${taskID}`, 404))
		}
		res.status(201).json({ task });
}
)

const updateTask =asyncWrapper( async(req,res, next)=>{
		const { id: taskID } = req.params;
		const task = await Task.findOneAndUpdate({_id: taskID}, req.body,{
			new: true,
			runValidators: true // r
		});
		if(!task){
			return next(createNewError(`No task with ${taskID}`, 404))
		}
		res.status(201).json({task});
}
)

const deleteTask = asyncWrapper(async(req,res)=>{
		const { id: taskID } = req.params;
		const task = await Task.findOneAndDelete({_id: taskID});
		if(!task){
			return next(createNewError(`No task with ${taskID}`, 404))
		}
		res.status(201).json({ msg: "Success" });
}
)
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}
