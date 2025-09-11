import { products } from "../data/product.js";

export const getAllProductsHandler = (req, res) => {
  res.status(200).json({
    status: "success",
    data: products,
  });
};

export const addProductsHandler = (req, res) => {
  const { name, price, description } = req.body;

  if (
    !name ||
    !name.trim() ||
    !price ||
    isNaN(price) ||
    !description ||
    !description.trim()
  ) {
    return res.status(400).json({
      status: "fail",
      message: "Name, price, and description are required",
    });
  }

  const id = Date.now();

  const newProduct = { id, name, price, description };

  products.push(newProduct);

  return res.status(201).json({
    status: "success",
    message: "product added successfully",
    data: {
      product: newProduct,
    },
  });
};

export const getProductByIdHandler = (req, res) => {
  const { id } = req.params;

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return res.status(404).json({
      status: "fail",
      message: "Product not found",
    });
  }

  res.status(200).json({
    status: "success",
    data: { product },
  });
};

export const updateProductByIdHandler = (req, res) => {
  const { id } = req.params;
  const { name, price, description } = req.body;

  if (
    !name ||
    !name.trim() ||
    !price ||
    isNaN(price) ||
    !description ||
    !description.trim()
  ) {
    return res.status(400).json({
      status: "fail",
      message: "Name, price, and description are required",
    });
  }

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return res.status(404).json({
      status: "fail",
      message: "Product not found",
    });
  }

  product.name = name;
  product.price = price;
  product.description = description;

  res.status(200).json({
    status: "success",
    message: "Product updated successfully",
    data: { product },
  });
};

export const deleteProductByIdHandler = (req, res) => {
  const { id } = req.params;

  const productIndex = products.findIndex((p) => p.id === parseInt(id));

  if (productIndex === -1) {
    return res.status(404).json({
      status: "fail",
      message: "Product not found",
    });
  }

  products.splice(productIndex, 1);

  return res.status(200).json({
    status: "success",
    message: "Product deleted successfully",
  });
};
