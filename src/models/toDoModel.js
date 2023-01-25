const mongoose = require( 'mongoose' );
const id=mongoose.Schema.Types.ObjectId
 
const Todo = new mongoose.Schema({
    user_id:{
        type:id,
        ref:"user"
    },
    task: {
        type:String,
        required:true
    },
    dueDate :{
        type:Date,
        required:true
    },
    status :{
        type:String,
        enum:["completed","overdue"],
        // required:true
    },
    
},{timestamps:true});
 
module.exports=mongoose.model( 'Todo', Todo );

