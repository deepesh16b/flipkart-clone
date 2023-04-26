import { productsData } from "./constants/products-data.js";
import Product from "./model/product-schema.js";

const DefaultData = async () => {
  try {
    await Product.insertMany(productsData);
    console.log("Data imported successfully!");
  } catch (error) {
    console.log(error.message);
  }
};

export default DefaultData;