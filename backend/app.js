const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const Stripe = require("stripe");

dotenv.config();

const authRouter = require("./routes/authRouter");
const productsRouter = require("./routes/productsRouter");
const verifyTokenValidity = require("./controllers/verityTokenValidity");
const ordersRouter = require("./routes/ordersRouter");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("./images"));

app.use("/api/auth", authRouter);
app.use("/api/products", productsRouter);
app.use("/api/orders", ordersRouter);
app.post("/api/verify-token", verifyTokenValidity);

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

app.post("/api/create-payment-intent", async (req, res) => {
  const { amount } = req.body;
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "eur",
      automatic_payment_methods: { enabled: true },
    });

    res.status(201).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "INTERNAL_SERVER_ERROR",
    });
  }
});

app.use((req, res) => {
  res.status(400).json({
    message: "BAD_URL_REQUEST",
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000 !!");
});
