import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

export default function NavBar() {
  return (
    <nav className="d-flex justify-content-around mt-2">
      <img src="/img/Ashley.png" alt="logo" style={{width: "80px"}}></img>
      <div>
        <Link to="/">
          <button className="btn btn-outline-dark mx-2">Home</button>
        </Link>
        <Link to="/category/verano">
          <button className="btn btn-outline-dark mx-2">Verano</button>
        </Link>
        <Link to="/category/invierno">
          <button className="btn btn-outline-dark mx-2">Invierno</button>
        </Link>
        <Link to="/category/calzado">
          <button className="btn btn-outline-dark mx-2">Calzados</button>
        </Link>
      </div>
      <Link to="/cart">
        <CartWidget />
      </Link>
    </nav>
  )
}
