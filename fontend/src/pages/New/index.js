import React, { useState, useMemo } from 'react';

import { camera } from '../../assets/logo.svg';
import { logo } from '../../assets/logo.svg';

import './styles.css';

export default function New() {
    const { company, setCompany } = useState('');
    const { techs, setTechs} = useState('');
    const { price, setPrice} = useState('');
    const [thumbnail, setThumbnail] = useState(null);

    function handleSubmit(){

    }
   
    return (
      
      <form onSubmit={handleSubmit}>
      
        <label id="thumbnail">
          <input type="file" onChange={event => setThumbnail(event.target.files[0])} />
          <img src={camera} alt="Select img" />
        </label>
        <label htmlFor="company">EMPRESA</label>
        <input id="company" placeholder="Sua empresa incrivel" value={company} onChange={event => setCompany(event.target.value)}/>
       
        <label htmlFor="tecnologias">TECNOLOGIAS 8 <span>(Separadas por vígula)</span></label>
        <input id="tecnologias" placeholder="Quais Tecnologias usam" value={techs} onChange={event => setTechs(event.target.value)} />
     
        <label htmlFor="price">VALOR DA DIÁRIA <span>(Em branco para GRATUITO)</span></label>
        <input id="price" placeholder="Valor cobrado por dia" value={price} onChange={event => setPrice(event.target.value)} />
        
        <button className="btn">Salvar</button>
        </form>
      )
}