if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const express = require("express");
const cors = require("cors");
const app = express();
const port = 5500;
const router = require("./routers/index");
const errHandler = require("./middlewares/errhandler");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", router);

app.use(errHandler);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
