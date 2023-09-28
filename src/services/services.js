import axios from "axios";

export const getAllCategories = async () => await axios.get(`${process.env.BASE_URL || ''}/api/categories`);

export const getAllProducts = async () => await axios.get(`${process.env.BASE_URL || ''}/api/products`);
