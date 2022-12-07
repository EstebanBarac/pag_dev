import { apple, bill, emprendedor, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="servicios" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={emprendedor} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} text-gradient`}>
        Emprededores <br className="sm:block hidden" /> </h2><h2 className={styles.heading2}>Marca Personal
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Para emprendedores o negocios pequeños ofrecemos este paquete inicial (puede necesitar mantenimiento mensual) :
        <ul className="font-bold text-white mt-4">
          <li className="p-1">
            -Creación de logo (opcional).
          </li>
          <li className="p-1">
            -Diseño página web.
          </li>
          <li className="p-1">
            -Desarrollo y lanzamiento página web.
          </li>
          <li className="p-1">
            -Dominio personalizado (opcional).
          </li>
          <li className="p-1">
          -Servidor de bajo/medio tráfico.
          </li>
          <li className="p-1">
          -Precio fijo.
          </li>
          
        </ul>


        </p>
    </div>
  </section>
);

export default Billing;
