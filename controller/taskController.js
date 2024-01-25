const taskModel = require("../model/taskSchema");

//to get all the task
const getTask = async (req, res) => {
  try {
    const tasks = await taskModel.find();
    return res.status(200).json({
      success: true,
      data: tasks,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      message: error.message,
    });
  }
};

//to post all the task

const postTask = async (req, res) => {
  const { title, description, dueDate, category } = req.body;

  try {
    const newTask = new taskModel({ title, description, dueDate, category });
    await newTask.save();
    return res.status(200).json({
      success: true,
      message: "Data added successfully",
      data: newTask,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      message: error.message,
    });
  }
};

//to update all the task

const updateTask = async (req, res) => {
  const { title, description, dueDate, category } = req.body;

  try {
    const updatedTask = await taskModel.findByIdAndUpdate(
      req.params.id,
      {
        title,
        description,
        dueDate,
        category,
      },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).send("Task not found");
    }

    return res.status(200).json({
      success: true,
      message: "Data updated successfully",
      data: updatedTask,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      message: error.message,
    });
  }
};

// Mark a task as completed
const taskComplete = async (req, res) => {
  try {
    const updatedTask = await taskModel.findByIdAndUpdate(
      req.params.id,
      { completed: true },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).send("Task not found");
    }

    return res.status(200).json({
      success: true,
      data: updatedTask,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      message: error.message,
    });
  }
};

//to delete a task
const deleteTask = async (req, res) => {
  try {
    const deletedTask = await taskModel.findByIdAndDelete(req.params.id);

    if (!deletedTask) {
      return res.status(404).send("Task not found");
    }

    return res.status(200).json({
      success: true,
      message: "Task deleted Successfully",
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = { getTask, postTask, updateTask, taskComplete, deleteTask };
