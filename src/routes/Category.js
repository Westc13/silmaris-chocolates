const Category = ({ products }) => {
  const { category } = useParams();
  const categoryProducts = products.filter(
    (product) => product.category === category
  );
  const categoryList = [];
  products.forEach((product) => {
    if (!categoryList.includes(product.category)) {
      categoryList.push(product.category);
    }
  });
  return (
    <section className="Category">
      <div className="wrapper">
        {categoryList.indexOf(category) === -1 ? (
          <Error />
        ) : (
          <>
            <h2 className="pageTitle">{`${category} Chocolate`}</h2>
            <ul className="products">
              {categoryProducts.map((product) => (
                <Product product={product} key={product.id} />
              ))}
            </ul>
            <Link to="/">Back</Link>
          </>
        )}
      </div>
    </section>
  );
};

export default Category;
