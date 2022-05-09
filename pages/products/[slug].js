const ProductPage = ({ product }) => {
  return (
    <div>
      <p>{product.name}</p>
      <p>{product.size}</p>
      <p>{product.flavour}</p>
      <p>{product.brand}</p>
      <p>{product.price}</p>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch('http://localhost:3000/products');
  const products = await res.json();

  return {
    paths: products.map(p => ({
      params: {
        slug: p.name.replace(' ', ''),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await fetch('http://localhost:3000/products');
  const products = await res.json();
  const [product] = products.filter(
    product => product.name.replace(' ', '') === slug
  );

  return { props: { product } };
}

export default ProductPage;
