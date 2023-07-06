import React, { useState } from 'react';
import './conteudo.css'

export default function Conteudo() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div className="conteudo">
      <h2>Count: {count}</h2>
      <button onClick={increment} className="botao">Increment</button>
    </div>
  );
}