import React, { useState } from 'react';
import './escrever.css'

export default function Escrever(){

    const [inputText, setInputText] = useState('');
    const [title, setTitle] = useState('Título inicial');
  
    const handleInputChange = (event) => {
      setInputText(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setTitle(inputText);
      setInputText('');
    };

    return (
        <div className="escreva">
          <h2>{title}</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" value={inputText} onChange={handleInputChange} className="campo" />
            <button type="submit" className="botao">Atualizar Título</button>
          </form>
        </div>
      );

}