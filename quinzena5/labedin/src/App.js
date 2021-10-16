import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://cache.skoob.com.br/local/images//TWkHvj5YIXGSBiG1cu80STx7Gy8=/170x170/center/top/smart/filters:format(jpeg)/https://skoob.s3.amazonaws.com/usuarios/2924480/2924480SK1598568840G.jpg" 
          nome="Julia Zielke Rebellato" 
          descricao="Oi, meu nome é Julia. Sou formada em Comunicação Social - Produção Editorial
          pela UFSM e atualmente moro em Santa Rosa, no Rio Grande do Sul, e trabalho como analista de e-commerce. Amo ler e estou
          numa disputa comigo mesma para ler pelo menos 50 livros nesse ano. Até agora foram 35."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
        imagem="https://png.pngtree.com/element_our/md/20180517/md_5afd688996524.jpg"
        chamada="Email: "
        email="juliazrebellato@gmail.com"
        />
    
        <CardPequeno
        imagem="https://png.pngtree.com/element_our/md/20180517/md_5afd688996524.jpg"
        chamada="Endereço: "
        email="Avenida Santa Cruz, 1146"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Jump Intercâmbios" 
          descricao="Diminuindo a minha expectatica de vida fazendo absolutamente tudo, desde o financeiro até
          ser guia de intercâmbio de adolescentes na Europa!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="Casa das Linhas" 
          descricao="Tudo o que tem a ver com o site." 
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
