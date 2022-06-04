class TransactionController {
  static createTransaction(req, res, next) {
    res.status(200).json({ message: "masuk bang" });
  }
}

module.exports = TransactionController;
