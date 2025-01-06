'use client';

import { useState, useEffect, useContext } from 'react';
import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product-actions";
import { SearchContext } from "@/app/(root)/layout";
import { Products } from '@/types';

const HomePage = () => {
  const [latestProducts, setLatestProducts] = useState<Products[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Products[]>([]);
  const { keyword } = useContext(SearchContext);

  useEffect(() => {
    const fetchProducts = async () => {
      const products: Products[] = await getLatestProducts();
      setLatestProducts(products);
      setFilteredProducts(products); // Initialize with all products
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered: Products[] = latestProducts.filter((product: Products) =>
      product.name.toLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [keyword, latestProducts]);

  return (
    <>
      <ProductList data={filteredProducts} limit={10} />
    </>
  );
};

export default HomePage;
