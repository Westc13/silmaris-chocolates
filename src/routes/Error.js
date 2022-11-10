const Error = () => {
  return (
    <section className="Error">
      <div className="wrapper">
        <h2>404 Error</h2>
        <p>Looks like the page you are looking for does not exist.</p>
        <Link to="/">Back</Link>
      </div>
    </section>
  );
};

export default Error;
