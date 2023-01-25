const express = require('express');
const router = express.Router();
const {createUser, createTask,getTask,updateTask,deleteTask,getCompletedTask,getOverdueTask}=require('./controller');


router.post('/user', createUser )

router.post('/task', createTask )
router.get('/task', getTask )

router.put('/task/:todoId', updateTask )
router.delete('/task/:todoId', deleteTask )
router.get('/task/:status', getCompletedTask )
router.get('/task/Overdue', getOverdueTask )

module.exports=router;

