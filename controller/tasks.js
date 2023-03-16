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
const getTask = asyncWrapper(async(req,res)=>{
		const {id: taskID} = req.params
		const task = await Task.findOne({_id: taskID});
		if(!task){
			return res.status(404).json({ msg: `No task with ${taskID}`})
		}
		res.status(201).json({ task });
}
)

const updateTask =asyncWrapper( async(req,res)=>{
		const { id: taskID } = req.params;
		const task = await Task.findOneAndDelete({_id: taskID});
		res.status(201).json({task});
}
)

const deleteTask = asyncWrapper(async(req,res)=>{
		const { id: taskID } = req.params;
		const task = await Task.findOneAndDelete({_id: taskID});
		if(!task){
			return res.status(404).json({ msg: `No task with ${taskID}`})
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
