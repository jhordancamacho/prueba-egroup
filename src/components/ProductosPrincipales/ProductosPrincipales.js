import "./ProductosPrincipales.css";
const productos = require.context("../../assets/productos");

export default function ProductosPrincipales() {
  let images = [];
  if (window.location.pathname === "/empanada") {
    for (let index = 1; index <= 6; index++) {
      images.push(productos("./pastel-" + index + ".png"));
    }
  } else {
    for (let index = 1; index <= 3; index++) {
      images.push(productos("./pastel-" + index + ".png"));
    }
  }
  return (
    <div className="cajaPrincipales">
      <h2>Productos principales</h2>
      <div className="cajaProductos">
        {images.map((url) => (
          <div className="producto">
            <img src={url} alt={url}></img>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              doloremque, minima vel, sequi sed, culpa quibusdam illum sint enim
              odit quae molestias consectetur accusamus ipsa commodi dolorem
              velit qui modi!
            </p>
          </div>
        ))}
      </div>
      <div className="boton">
        <button>Ver mas</button>
      </div>
    </div>
  );
}
