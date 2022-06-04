const errHandler = (err, req, res, next) => {
  switch (err.name) {
    case "SequelizeValidationError":
      res.status(400).json({ message: err.errors[0].message });
      break;
    case "SequelizeUniqueConstraintError":
      res.status(400).json({ message: err.errors[0].message });
      break;
    case "INVALID LOGIN":
      res.status(401).json({ message: "Invalid Email or Password" });
      break;
    case "INVALID DATA":
      res.status(400).json({ message: "Please fill empty blank" });
      break;
    case "INVALID ID":
      res.status(400).json({ message: err.message });
      break;
    default:
      res.status(500).json(err.message);
      break;
  }
};

module.exports = errHandler;
