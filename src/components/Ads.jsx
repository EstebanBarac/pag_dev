import {card, empresa1, empresa2, redes2, emprendedor} from '../assets';
import styles, { layout } from "../style";
import Button from "./Button";

const Ads = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={redes2} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2} text-gradient`}>
        Marketing Digital <br className="sm:block hidden" /></h2><h2 className={styles.heading2}>Publicidad
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Complementario a nuestros otros servicios, ofrecemos :
      </p>
      <ul className='font-bold text-white mt-4 text-xl'>
        <li className='p-1'>-Creación de redes sociales.</li>
        <li className='p-1'>-Administración de redes sociales.</li>
        <li className='p-1'>-Creación y Diseño de contenido Semanal.</li>
        <li className='p-1'>-Campañas publicitarias en redes sociales.</li>
        <li className='p-1'>-Creación y mantenimiento de publicidad en Google Ads.</li>
        <li className='p-1'>-Google Analytics.</li>
      </ul>
    </div>
  </section>
);

export default Ads;