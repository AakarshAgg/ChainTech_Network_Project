const express=require("express")
const app=express()
const databaseconnect = require("./config/databaseConfig");
const taskRouter=require("./router/taskRoute")

databaseconnect()

app.use(express.json()); // built-in middleware
app.use("/api/tasks",taskRouter)

app.use("/", (req, res) => {
    res.status(200).json({
      data: "Task server",
    });
  });

module.exports=app