const pool = require("../db/pool");
const {
  getAllProducts,
  getOneProduct,
  deleteOneProduct,
  createNewProduct,
  updateProduct,
} = require("../db/queries");

async function getProducts(req, res) {
  const { limit, latest } = req.query;

  try {
    if (latest) {
      const { rows } = await pool.query(
        "SELECT * FROM products ORDER BY created_at ASC LIMIT(6)",
      );
      const products = rows;
      return res.status(200).json({
        message: "Latest products returned successfully !!",
        products,
      });
    }

    if (!limit) {
      const products = await getAllProducts();
      return res.status(200).json({
        message: "Products returned sucessfully",
        products,
      });
    }

    console.log(latest);

    const products = await getAllProducts(limit);
    return res.status(200).json({
      message: "Products returned sucessfully",
      products,
    });
  } catch (err) {
    res.status(500).json({
      message: "INTERNAL_SERVER_ERROR",
    });
  }
}

async function postNewProduct(req, res) {
  try {
    const { file } = req;
    const imageUrl = `${process.env.API_URL}/${file.originalname}`;

    const { name, description, price, code, stocked, category } = req.body;

    if (
      name &&
      description &&
      price &&
      code &&
      stocked &&
      category &&
      imageUrl
    ) {
      const newProduct = await createNewProduct({
        name,
        description,
        price: parseInt(price),
        code,
        stocked,
        imageUrl,
        category,
      });

      res.status(201).json({
        message: "New product created sucessfully !!",
        newProduct,
      });
    } else {
      res.status(400).json({
        message: "BAD_REQUEST Verify input and retry !!",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "INTERNAL_SERVER_ERROR",
    });
    console.log(err);
  }
}

async function getProduct(req, res) {
  try {
    const { id } = req.params;

    const product = await getOneProduct(id);

    if (!product) {
      return res.status(404).json({
        message: "Product with this id not found !!",
      });
    }

    res.status(200).json({
      message: "Product returned successfully",
      product,
    });
  } catch (err) {
    res.status(500).json({
      message: "INTERNAL_SERVER_ERROR",
    });
  }
}

async function deleteProduct(req, res) {
  try {
    const { id } = req.params;
    const deletedProduct = await deleteOneProduct(id);

    if (!deletedProduct) {
      return res.status(404).json({
        message: "Product with this id not found !!",
      });
    }

    res.status(200).json({
      message: "Product deleted successfully !!",
      deletedProduct,
    });
  } catch (err) {
    throw err;
  }
}

async function patchProduct(req, res) {
  try {
    const { id } = req.params;
    const { file } = req;
    const {
      newProductName,
      newProductCategory,
      newProductPrice,
      newProductCode,
      newProductDescription,
    } = req.body;

    if (!file) {
      const { rows } = await pool.query(
        "UPDATE products SET name=$1, description=$2, code=$3, price=$4, category=$5 WHERE id =$6 RETURNING *",
        [
          newProductName,
          newProductDescription,
          newProductCode,
          parseInt(newProductPrice),
          newProductCategory,
          id,
        ],
      );

      const updatedProduct = rows[0];

      if (!updatedProduct) {
        return res.status(404).json({
          message: "Product with this id has not been found !!",
        });
      }

      return res.status(200).json({
        message: "Product updated sucessfully !!",
        updatedProduct,
      });
    }

    const newImageUrl = `${process.env.API_URL}/${file.originalname}`;
    const updatedProduct = await updateProduct(id, {
      newProductName,
      newProductCategory,
      newProductPrice: parseInt(newProductPrice),
      newProductCode,
      newProductDescription,
      newImageUrl,
    });

    if (!updatedProduct) {
      return res.status(404).json({
        message: "Product with this id has not been found !!",
      });
    }

    res.status(200).json({
      message: "Product updated sucessfully !!",
      updatedProduct,
    });
  } catch (err) {
    res.status(500).json({
      message: "INTERNAL_SERVER_ERROR",
    });
    console.log(err);
  }
}

module.exports = {
  getProducts,
  postNewProduct,
  getProduct,
  deleteProduct,
  patchProduct,
};
