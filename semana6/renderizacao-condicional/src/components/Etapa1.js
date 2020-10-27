import React from 'react';

function Etapa1() {
  return (
    <div className="Etapa1">
      <h3>ETAPA 1 - DADOS GERAIS</h3>
      <form>
        <label>1 - Qual o seu nome?</label>
        <br />
        <input />
        <br />
        <label>2 - Qual a sua idade?</label>
        <br />
        <input />
        <br />
        <label>3 - Qual o seu e-mail?</label>
        <br />
        <input />
        <br />
        <label>4 - Qual a sua escolaridade?</label>
        <br/>
        <select>
          <option value=""></option>
          <option value="medio-completo">Ensino Médio completo</option>
          <option value="medio-incompleto">Ensino Médio incompleto</option>
          <option value="superior-completo">Superior completo</option>
          <option value="superior-incompleto">Superior incompleto</option>
        </select>
      </form>
    </div>
  );
}

export default Etapa1;