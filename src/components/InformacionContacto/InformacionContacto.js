import "./InformacionContacto.css";
const carpetaIconos = require.context("../../assets/iconos");
export default function InformacionContacto() {
  return (
    <div className="infoContacto">
      <div className="infoUbicacion footer">
        <img src={carpetaIconos("./mapa.png")} alt="ubicacion" id="mapa"></img>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.307521690166!2d-74.05975148523761!3d4.716547496574278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f8544c84bd935%3A0x398e09370c01f690!2sBendita%20Empanada!5e0!3m2!1ses!2sco!4v1645928643491!5m2!1ses!2sco"
          width="350"
          height="200"
          style={{ border: 0, allowfullscreen: "" }}
          loading="lazy"
        />
        <div className="infoIcons">
          <img
            src={carpetaIconos("./telefono.png")}
            alt="telefono"
            id="telefono"
          ></img>
          <img src={carpetaIconos("./email.png")} alt="email" id="email"></img>
        </div>
      </div>

      <div className="footer newslear">
        <h3>Newslear</h3>
        <input type="text"></input>
        <div className="newslearIcons">
          <img src={carpetaIconos("./facebook.png")} alt="facebook"></img>
          <img src={carpetaIconos("./twitter.png")} alt="Twitter"></img>
          <img
            src={carpetaIconos("./instagram.png")}
            alt="Instagram"
            id="instagram"
          ></img>
        </div>
      </div>
    </div>
  );
}
