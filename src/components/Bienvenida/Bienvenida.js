import burrito from "../../assets/Images/burrito.jpg";
import "./Bienvenida.css";

export default function Bienvenida() {
  return (
    <>
      <h2>Texto de bienvenida</h2>
      <div className="cajas">
        <div className="caja">
          <img src={burrito} alt="burrito"></img>
        </div>
        <div className="caja">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            veniam a consectetur dolorum. Distinctio numquam et enim ipsam vitae
            earum magni dolor necessitatibus rerum, commodi velit voluptates
            tenetur corrupti. Nulla, laudantium. Obcaecati, id mollitia aliquam
            libero et necessitatibus! Est laudantium, possimus eos sequi qui sed
            ullam fugiat earum voluptas nobis nulla, illum officiis magnam
            corrupti natus nam culpa sapiente amet dignissimos quidem soluta
            dolorum reprehenderit beatae eveniet. Ad libero qui fugiat accusamus
            ea et sed ipsum vel tempore veniam velit, molestiae voluptatibus
            corporis unde. Illo, explicabo perspiciatis. Nobis, quibusdam
            perferendis architecto repellendus impedit fugiat earum quisquam
            dicta? Natus, repellat iure!
          </p>
          <button>Ver más</button>
        </div>
      </div>
    </>
  );
}
