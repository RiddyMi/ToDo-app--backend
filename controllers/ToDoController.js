const ToDoModel = require('../models/ToDoModel')

const getTodo = async (req, res) => {
  const toDo = await ToDoModel.find()
  res.send(toDo)
}

const saveToDo = async (req, res) => {
  const { text } = req.body;

  ToDoModel.create({ text })
    .then(data => {  
      console.log("Added Successfully...");
      console.log(data);
      res.send(data);
    })
    .catch(error => {  
      console.error("Error saving To-Do:", error);
      res.status(500).send("An error occurred while saving the To-Do item.");
    });
};

const updateToDo = async (req, res) => {
    const {_id, text} = req.body

    ToDoModel
    .findByIdAndUpdate(_id, {text})
    .then(() => res.send("Updated Successfully...."))
    .catch(error => {
      console.error("Error updating TOdo")})
}

const deleteToDo = async (req, res) => {
  const { _id } = req.body;

  try {
    await ToDoModel.findByIdAndDelete(_id);
    res.status(200).send("Deleted Successfully.");
  } catch (error) {
    console.error("Error deleting ToDo:", error);
    res.status(500).send("An error occurred while deleting the ToDo.");
  }
};

module.exports = { getTodo, saveToDo, updateToDo, deleteToDo}