import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }) {
    
    const [email, setEmail] = useState('');

    async function handleSubmit(event){
      event.preventDefault();
      console.log({email})
  
       const response = await api.post('/sessions', {email} );
  
       const{ _id } = response.data;
  
      localStorage.setItem("user", _id);

      history.push('/dashboard');
    }

    return (
        <>
        <p>
        Oforeça <strong>spots</strong> para programadores  e encontre <strong>talentos</strong> para sua empresa.
      </p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email *">E-mail</label>
        <input type="email" id="email" placeholder="Seu melhor e-mail"
        onChange={event => setEmail(event.target.value)}
        value={email}></input>
        <button className="btn" type="submit">Entrar</button>
      </form>
      </>
      )
}