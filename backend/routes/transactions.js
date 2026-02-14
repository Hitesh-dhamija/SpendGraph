const {
  addExpense,
  getExpense,
  deleteExpense,
} = require("../controllers/expense");
const {
  addIncome,
  getIncomes,
  deleteIncome,
} = require("../controllers/income");
const {
  loginController,
  registerController,
} = require("../controllers/userController");

const authMiddleware = require("../middleware/auth");

const router = require("express").Router();

router
  .post("/add-income", authMiddleware, addIncome)
  .get("/get-incomes", authMiddleware, getIncomes)
  .delete("/delete-income/:id", authMiddleware, deleteIncome)
  .post("/add-expense", authMiddleware, addExpense)
  .get("/get-expenses", authMiddleware, getExpense)
  .delete("/delete-expense/:id", authMiddleware, deleteExpense)
  .post("/users/login", loginController)
  .post("/users/register", registerController);

module.exports = router;
