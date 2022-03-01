import './BenditaEmpresa.css'
const productos = require.context("../../assets/empresa");
const images = [
productos("./empresa-1.jpg"),
productos("./empresa-2.jpg"),
productos("./empresa-3.jpg"),
];
export default function BenditaEmpresa() {
    return (
        <div className="cajaPrincipalEmpresa">
          <h2>Empresa</h2>
      <div className="cajaEmpresa">
        {images.map((url) => (
          <div className="imagenEmpresa">
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
        </div>
    )
}