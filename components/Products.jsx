import ProductCard from '../components/ProductCard';

const Products = ({ products }) => {
  return (
    <div
      className='col-span-4 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2'
      data-testid='product-grid'
    >
      {products.map(prod => {
        return <ProductCard key={prod.id} data={prod} />;
      })}
    </div>
  );
};
export default Products;
