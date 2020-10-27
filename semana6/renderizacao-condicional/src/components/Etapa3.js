import React from 'react';

function Etapa3() {
    return (
      <div className="Etapa3">
        <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
        <form>
          <label>5 - Por que você não terminou um curso de graduação?</label>
          <br />
          <input />
          <br />
          <label>6 - Você fez algum curso complementar?</label>
          <br/>
          <select>
            <option value=""></option>
            <option value="nenhum">nenhum</option>
            <option value="ingles">inglês</option>
            <option value="tecnico">técnico</option>
          </select>
        </form>
      </div>
    );
  }
  
  export default Etapa3;