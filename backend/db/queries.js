const pool = require("./pool");

async function createNewUser(email, password, firstname, lastname, role) {
  try {
    await pool.query(
      "INSERT INTO users (email, password, firstname, lastname, role, register_date) VALUES ($1, $2, $3, $4, $5, now())",
      [email, password, firstname, lastname, role],
    );
  } catch (err) {
    throw err;
  }
}

async function getAllProducts(limit) {
  try {
    if (!limit) {
      const { rows } = await pool.query("SELECT * FROM products");
      return rows;
    }
    const { rows } = await pool.query("SELECT * FROM products LIMIT($1)", [
      limit,
    ]);
    return rows;
  } catch (err) {
    throw err;
  }
}

async function createNewProduct({
  name,
  description,
  price,
  code,
  stocked,
  imageUrl,
  category,
}) {
  try {
    const { rows } = await pool.query(
      "INSERT INTO products (name, description, price, code, stocked, image_url, category, created_at) VALUES ($1, $2, $3, $4, $5, $6, $7, now()) RETURNING *",
      [name, description, price, code, stocked, imageUrl, category],
    );
    const newProduct = rows[0];
    return newProduct;
  } catch (err) {
    throw err;
  }
}

async function getOneProduct(productId) {
  try {
    const { rows } = await pool.query("SELECT * FROM products WHERE id = $1", [
      productId,
    ]);
    const product = rows[0];

    return product;
  } catch (err) {
    throw err;
  }
}

async function deleteOneProduct(productId) {
  try {
    const { rows } = await pool.query(
      "DELETE FROM products WHERE id =$1 RETURNING *",
      [productId],
    );

    const deletedProduct = rows[0];

    return deletedProduct;
  } catch (err) {
    throw err;
  }
}

async function updateProduct(
  id,
  {
    newProductName,
    newProductDescription,
    newProductCode,
    newProductPrice,
    newProductCategory,
    newImageUrl,
  },
) {
  try {
    const { rows } = await pool.query(
      "UPDATE products SET name=$1, description=$2, code=$3, price=$4, category=$5, image_url=$6 WHERE id =$7 RETURNING *",
      [
        newProductName,
        newProductDescription,
        newProductCode,
        newProductPrice,
        newProductCategory,
        newImageUrl,
        id,
      ],
    );
    const updatedProduct = rows[0];
    return updatedProduct;
  } catch (err) {
    throw err;
  }
}

async function getAllOrders() {
  try {
    const { rows } = await pool.query(
      "SELECT orders.*, users.firstname AS userFirstname, users.lastname AS userLastname FROM orders JOIN users ON orders.user_id = users.id",
    );
    return rows;
  } catch (err) {
    throw err;
  }
}

async function createNewOrder(
  userId,
  status,
  total_price,
  shipping_address,
  payment_method,
) {
  try {
    const { rows } = await pool.query(
      "INSERT INTO orders (user_id, status, total_price, shipping_address, payment_method, created_at) VALUES ($1, $2, $3, $4, $5, now()) RETURNING *",
      [userId, status, total_price, shipping_address, payment_method],
    );
    const newOrder = rows[0];
    return newOrder;
  } catch (err) {
    throw err;
  }
}

async function deleteOneOrder(orderId) {
  try {
    const { rows } = await pool.query(
      "DELETE FROM orders WHERE id = $1 RETURNING *",
      [orderId],
    );
    const deletedOrder = rows[0];

    return deletedOrder;
  } catch (err) {
    throw err;
  }
}

async function getOneOrder(orderId) {
  try {
    const { rows } = await pool.query(
      "SELECT orders.*, users.firstname AS userfirstname, users.lastname AS userlastname FROM orders JOIN users ON orders.user_id = users.id WHERE orders.id =$1",
      [orderId],
    );
    const order = rows[0];

    return order;
  } catch (err) {
    throw err;
  }
}

module.exports = {
  createNewUser,
  getAllProducts,
  createNewProduct,
  getOneProduct,
  deleteOneProduct,
  updateProduct,
  getAllOrders,
  createNewOrder,
  deleteOneOrder,
  getOneOrder,
};
