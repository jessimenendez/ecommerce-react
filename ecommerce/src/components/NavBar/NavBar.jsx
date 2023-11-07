import CartWidget from "../CartWidget/CartWidget";

export default function NavBar() {
  return (
    <nav className="d-flex justify-content-around p-4 bg-light">
        <img src="/img/logo2.png" alt="logo" style={{width: "80px"}}></img>
        <div>
            <button type="button" class="btn btn-primary mx-2">Home</button>
            <button type="button" class="btn btn-primary mx-2">Productos</button>
            <button type="button" class="btn btn-primary mx-2">Contactos</button>
        </div>
        <CartWidget/>
    </nav>
  )
}
