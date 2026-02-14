const Expense = require("../models/ExpenseModel");

exports.addExpense = async (req, res) => {
  try {
    const { title, amount, category, description, date } = req.body;

    // validations
    if (!title || !category || !description || !date || amount == null) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    if (isNaN(amount) || amount <= 0) {
      return res
        .status(400)
        .json({ message: "Amount must be a positive number!" });
    }

    const expense = await Expense.create({
      title,
      amount,
      category,
      description,
      date,
      user: req.user.id,
    });

    res.status(201).json({
      success: true,
      message: "Expense Added",
      expense,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getExpense = async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user.id }).sort({
      createdAt: -1,
    });

    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;

    const expense = await Expense.findOneAndDelete({
      _id: id,
      user: req.user.id,
    });

    if (!expense) {
      return res.status(404).json({
        message: "Expense not found or unauthorized",
      });
    }

    res.status(200).json({
      success: true,
      message: "Expense Deleted",
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
