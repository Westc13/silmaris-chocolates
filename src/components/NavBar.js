import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/store">Store</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <button>
        <FontAwesomeIcon icon={faShoppingCart} />
        <div>3</div>
      </button>
    </>
  );
}
export default NavBar;
