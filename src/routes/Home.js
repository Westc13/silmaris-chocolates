const Home = ({ products }) => {
  return (
    <>
      <Header />
      <Catergories products={products} />
      <ProductGrid products={products} />
    </>
  );
};
export default Home;
