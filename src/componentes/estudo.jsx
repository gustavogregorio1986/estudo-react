import { useState } from "react";
import './estudo.css';

export default function Estudo(){
     const [titulo, setTitulo] = useState('Programar backend');

     const handleClick = () => {
        setTitulo(titulo === "Programar backend" ? "Programar frontend" : "Programar backend");
     };

     return (
        <div className="estudo">
          <h2 className="titulo">{titulo}</h2>
          <button onClick={handleClick} className="botao">Alterar Título</button>
        </div>
      );
}