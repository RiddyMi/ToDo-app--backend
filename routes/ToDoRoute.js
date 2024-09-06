const {Router} = require("express");
const {getTodo, saveToDo, updateToDo, deleteToDo}  = require("../controllers/ToDoController");

// console.log(TodoController)

const router = Router()

router.get('/', getTodo)
router.post('/save', saveToDo)
router.post('/update', updateToDo)
router.post('/delete', deleteToDo)

module.exports = router ;