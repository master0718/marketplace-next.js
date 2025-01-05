"use server";

import sampleData from "@/mock-db/sample-data";

//get latest products
export async function getLatestProducts() {
  return sampleData.products;
}

//get single product by its slug
export async function getProductBySlug(slug: string) {
  return sampleData.products.find((product) => product.slug === slug);
}
