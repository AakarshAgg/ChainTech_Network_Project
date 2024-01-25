const taskValidator=require("../middleware/task.validator")
const express=require("express")
const taskRouter=express.Router()

const {getTask,postTask,updateTask,taskComplete,deleteTask}=require("../controller/taskController")


taskRouter.get("/gettask",getTask)
taskRouter.post("/posttask",postTask)
taskRouter.put("/updatetask/:id",taskValidator,updateTask)
taskRouter.patch("/taskcomplete/:id/complete",taskComplete)
taskRouter.delete("/deletetask/:id",deleteTask)

module.exports=taskRouter

