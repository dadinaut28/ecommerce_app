const {
  getAllOrders,
  createNewOrder,
  deleteOneOrder,
  getOneOrder,
} = require("../db/queries");

async function getOrders(req, res) {
  try {
    const orders = await getAllOrders();
    res.status(200).json({
      message: "Orders returned successfully !!",
      orders,
    });
  } catch (err) {
    res.status(500).json({
      message: "INTERNAL_SERVER_ERROR",
    });
  }
}

async function postOrder(req, res) {
  try {
    const { userId } = req;
    const { totalPrice, shippingAddress, paymentMethod } = req.body;
    const newOrder = await createNewOrder(
      userId,
      "processing",
      totalPrice,
      shippingAddress,
      paymentMethod,
    );

    res.status(201).json({
      message: "Order created successfully !!",
      newOrder,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "INTERNAL_SERVER_ERROR",
    });
  }
}

async function deleteOrder(req, res) {
  try {
    const { id } = req.params;
    const deletedOrder = await deleteOneOrder(id);

    if (!deletedOrder) {
      return res.status(404).json({
        message: "Order with this id has not been found !!",
      });
    }

    res.status(200).json({
      message: "Order deleted successfully",
      deletedOrder,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "INTERNAL_SERVER_ERROR",
    });
  }
}

async function getOrder(req, res) {
  try {
    const { id } = req.params;
    const order = await getOneOrder(id);

    if (!order) {
      return res.status(404).json({
        message: "Order with this id has not been found !!",
      });
    }

    res.status(200).json({
      message: "Order returned successfully !!",
      order,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "INTERNAL_SERVER_ERROR",
    });
  }
}

module.exports = {
  getOrders,
  postOrder,
  deleteOrder,
  getOrder,
};
