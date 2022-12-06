import { card, empresa1, empresa2 } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} text-gradient`}>
        Empresas <br className="sm:block hidden" /> </h2><h2 className={styles.heading2}>Negocios.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Para empresas o negocios ofrecemos los siguientes servicios (mantenimiento mensual) :
      </p>
      <ul className="font-bold text-white text-xl mt-4">
        <li className="p-1">-Diseño completamente adaptable a cualquier dispositivo.</li>
        <li className="p-1">-Desarrollo página web, SPA, E-commerce o Web App.</li>
        <li className="p-1">-Optimización de recursos digitales.</li>
        <li className="p-1">-Dominio personalizado.</li>
        <li className="p-1">-Servidor preparado para alto tráfico.</li>
        <li className="p-1">-Integración Google Analytics.</li>
        <li className="p-1">-Presupuesto personalizado.</li>
      </ul>


    </div>

    <div className={layout.sectionImg}>
      <img src={empresa2} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
