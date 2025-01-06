import { Products } from "@/types";
import ProductCard from "./product-card";

const ProductList = ({
  data,
  limit,
}: {
  data: Products[];
  limit?: number;
}) => {
  const limitedData = limit ? data.slice(0, limit) : data;

  return (
    <div className='my-10'>
      {data.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {limitedData.map((product: Products) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div>There are no products</div>
      )}
    </div>
  );
};

export default ProductList;
