const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const PORT = process.env.PORT || 3000;

dotenv.config();

const authRouter = require("./routes/authRouter");
const productsRouter = require("./routes/productsRouter");
const verifyTokenValidity = require("./controllers/verityTokenValidity");
const ordersRouter = require("./routes/ordersRouter");

const app = express();

app.use(
  cors({
    origin: "https://ecommerce-app-zeta-dun.vercel.app/",
  }),
);
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("./images"));

app.use("/api/auth", authRouter);
app.use("/api/products", productsRouter);
app.use("/api/orders", ordersRouter);
app.post("/api/verify-token", verifyTokenValidity);

app.use((req, res) => {
  res.status(400).json({
    message: "BAD_URL_REQUEST",
  });
});

app.listen(PORT, () => {
  console.log("Server is running on port 3000 !!");
});
