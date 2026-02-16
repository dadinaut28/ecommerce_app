export const apiUrl = import.meta.env.VITE_API_URL;

export class LoginInputError extends Error {}
export class ServerError extends Error {}
export class InputError extends Error {}

export async function registerNewUser(
  firstname: string,
  lastname: string,
  email: string,
  password: string,
) {
  const response = await fetch(`${apiUrl}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      firstname,
      lastname,
      email,
      password,
    }),
  });
  console.log(response);
}

export async function authenticateUser(email: string, password: string) {
  const response = await fetch(`${apiUrl}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (response.status > 299 && response.status < 500) {
    throw new LoginInputError();
  } else if (response.status > 500) {
    throw new ServerError();
  }

  const data = await response.json();
  const { token } = data;

  return token;
}

export async function getProducts(limit?: number) {
  if (limit) {
    const response = await fetch(`${apiUrl}/api/products?limit=${limit}`, {
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    const { products } = data;
    return products;
  } else {
    const response = await fetch(`${apiUrl}/api/products`, {
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
    const { products } = data;
    return products;
  }
}

export async function getProduct(productId: undefined | string) {
  try {
    const response = await fetch(`${apiUrl}/api/products/${productId}`, {
      headers: {
        "Content-type": "application/json",
      },
    });

    if (response.status !== 200) {
      return null;
    }

    const data = await response.json();
    const { product } = data;
    console.log(product);
    return product;
  } catch (err) {
    console.log(err);
  }
}

// name, description, price, code, stocked, category
export async function createNewProduct(
  name: string,
  description: string,
  price: number,
  code: string,
  stocked: string,
  category: string,
  image: File,
) {
  const body = new FormData();

  body.append("name", name);
  body.append("description", description);
  body.append("price", String(price));
  body.append("code", code);
  body.append("stocked", stocked);
  body.append("category", category);
  body.append("image", image);

  const response = await fetch(`${apiUrl}/api/products`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("ecommerce_jwt_token")}`,
    },
    body: body,
  });

  if (response.status > 399 && response.status < 500) {
    throw new InputError();
  } else if (response.status > 500) {
    throw new ServerError();
  }
}

export async function updateProduct(
  productId: number | string,
  newProductName: string,
  newProductDescription: string,
  newProductCode: string,
  newProductPrice: number,
  newProductCategory: string,
  newProductImage?: File | null,
) {
  try {
    const body = new FormData();

    body.append("newProductName", newProductName);
    body.append("newProductDescription", newProductDescription);
    body.append("newProductCode", newProductCode);
    body.append("newProductPrice", String(newProductPrice));
    body.append("newProductCategory", newProductCategory);
    if (newProductImage) body.append("image", newProductImage);

    const response = await fetch(`${apiUrl}/api/products/${productId}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("ecommerce_jwt_token")}`,
      },
      body: body,
    });

    const data = await response.json();
    console.log(data.updatedProduct);
  } catch (err) {
    console.log(err);
  }
}

export async function deleteProduct(productId: number | string) {
  try {
    await fetch(`${apiUrl}/api/products/${productId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("ecommerce_jwt_token")}`,
      },
    });
  } catch (err) {
    console.log(err);
  }
}

export async function getOrders() {
  try {
    const response = await fetch(`${apiUrl}/api/orders`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("ecommerce_jwt_token")}`,
      },
    });

    const data = await response.json();
    return data.orders;
  } catch (err) {
    console.log(err);
  }
}

export async function createNewOrder(
  totalPrice: number,
  shippingAddress: string,
  paymentMethod: string,
) {
  try {
    await fetch(`${apiUrl}/api/orders`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("ecommerce_jwt_token")}`,
      },
      body: JSON.stringify({
        totalPrice,
        shippingAddress,
        paymentMethod,
      }),
    });
  } catch (err) {
    console.log(err);
  }
}

export async function deleteOrder(orderId: number | string) {
  try {
    await fetch(`${apiUrl}/api/orders/${orderId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("ecommerce_jwt_token")}`,
      },
    });
  } catch (err) {
    console.log(err);
  }
}

export async function getOrder(orderId: number | string) {
  try {
    const response = await fetch(`${apiUrl}/api/orders/${orderId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("ecommerce_jwt_token")}`,
      },
    });

    const data = await response.json();
    return data.order;
  } catch (err) {
    console.log(err);
  }
}

export async function getLatestProducts() {
  try {
    const response = await fetch(`${apiUrl}/api/products?latest=true`, {});

    const data = await response.json();
    return data.products;
  } catch (err) {
    console.log(err);
  }
}
