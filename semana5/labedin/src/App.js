import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from "./components/CardPequeno/CardPequeno"
import ImagemButton from './components/ImagemButton/ImagemButton';
import fotoPortfolio from "./foto-portfolio.jpg"
import logoMetro from "./metro-rio-logo-2.svg"
import logoCTIS from "./logo-CTIS.jpg"
import iconeEndereco from "./icone-endereco.png"
import iconeEmail from "./icone-email.png"

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={fotoPortfolio}
          nome="Augusto Luna" 
          descricao="Oi, eu sou o Augusto Luna. Sou estudante de web full stack na Labenu. Em breve serei o melhor do melhor do mundo em programar!"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Contato</h2>
        <CardPequeno
          imagem= {iconeEmail}
          email="Email: "
          texto= "caugustolunas@gmail.com"
        />
        <CardPequeno
          imagem= {iconeEndereco}
          endereco= "Endereço: "
          textoEndereco="Niteroi-RJ"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Estudante de programação - Web FullStack" 
        />
        
        <CardGrande 
          imagem={logoMetro} 
          nome="MetroRio" 
          descricao="Condutor de trem nas linhas 1, 2 e 4." 
        />

        <CardGrande 
          imagem={logoCTIS} 
          nome="CTIS" 
          descricao="Supervisor de Outsourcing de impressão."
          />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
