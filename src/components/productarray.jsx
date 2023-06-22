
import { PopularProducts } from "../data";
import React, { useEffect } from 'react';
import { createContext, useState } from 'react';
import { getProducts} from "../service/api.js";

const ProductContext = createContext();

export default ProductContext;

export const ProductProvider = ({ children }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts();
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);
   const value = { product }
  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};
