import React from "react";

const Button = ({ styles }) => (
  <a href="https://api.whatsapp.com/send?phone=5492995286048&text=Buen%20dia,%20solicito%20mas%20informacion%20sobre%20desarrollo%20web">
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-white hover:text-black bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    Contactar
  </button></a>
);

export default Button;
