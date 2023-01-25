const toDoModel = require("./models/toDoModel")
const userModel = require("./models/userModel")


async function createUser(req,res) {
    try {
        const user = await userModel.create(req.body)
        if(!user) return res.status(400).json({error:"Sommehing went wrong"})
        res.status(201).json(user)
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}



async function createTask(req,res) {
    try {
        const data = await toDoModel.create(req.body)
        if(!data) return res.status(400).json({error:"Sommehing went wrong"})
        res.status(201).json(data)
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

async function getTask(req,res) {
    try {
        const user = await toDoModel.find(req.body)
        if(!user) return res.status(400).json({error:"Sommehing went wrong"})
        res.status(201).json(user)
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}


async function updateTask(req,res) {
    try {
        const {todoId}=req.params
        const user = await toDoModel.findByIdAndUpdate(todoId,req.body,{new:true})
        if(!user) return res.status(400).json({error:"Sommehing went wrong"})
        res.status(201).json({message:'Task updated successfully',data:user})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}
async function deleteTask(req,res) {
    try {
        const {todoId}=req.params
        const task = await toDoModel.findById(todoId)
        if(!task) return res.status(404).json({error:"Task Not found"})
        await toDoModel.deleteOne({_id:todoId})
        res.status(200).json({message:'Task Deleted Successfully'})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}


async function getCompletedTask(req,res) {
    try {
        const {status}=req.params
        const completedTask= await toDoModel.find({status})
        if(!completedTask) return res.status(400).json({error:"Sommehing went wrong"})
        res.status(200).json({data:completedTask})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}

async function getOverdueTask(req,res) {
    try {
        const OverdueTask= await toDoModel.find({status:"overdue"})
        if(!OverdueTask) return res.status(400).json({error:"Sommehing went wrong"})
        res.status(200).json({data:OverdueTask})
    } catch (error) {
        return res.status(500).json({error:error.message})
    }
}


module.exports = {createUser, createTask,getTask,updateTask,deleteTask,getCompletedTask,getOverdueTask}