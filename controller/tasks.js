const Task = require('../Models/Task')


const getAllTasks = async(req,res)=>{
	try{
		const tasks = await Task.find()
		res.status(200).json({tasks})
	}catch(err){
		res.status(500).json({msg: "some things wrong"})

	}	
}

const createTask = async(req,res)=>{
    try{
		const task = await Task.create(req.body);
	    res.status(201).json({task}) 
    }catch(err){
        res.status(500).json({ msg: err})
    }
}

const getTask = async(req,res)=>{
	try{
		const task = await Task.findOne(req.params);
		res.status(201).json({task});
	}catch(err){
		res.status(500).json({msg:err})
	}

}
const updateTask = (req,res)=>{
    res.send("Update Task")
}
const deleteTask = (req,res)=>{
    res.send("delete Task")
}
module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}
