const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const taskSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    minLength: [5, "Name must be atleast 5 characters"],
    maxLength: [50, "Name must be less than 50 characters"],
    trim: true,
  },
  description: {
    type: String,
    required: true,
    minLength: [5, "Userame must be atleast 5 characters"],
    maxLength: [50, "UserAme must be less than 50 characters"],
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  dueDate: {
    type: Date,
    required: [true,"due date is required"],
  },
  category: {
    type: String,
    required: [true,"category is required"],
  },
},{
  timestamps:true
});

const taskModel = mongoose.model("user", taskSchema);

module.exports = taskModel;
