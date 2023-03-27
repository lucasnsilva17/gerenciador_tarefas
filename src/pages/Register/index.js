import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from 'react';
import './register.css';
import { auth } from '../../firebaseConnection';
import { createUserWithEmailAndPassword } from "firebase/auth";

function Register(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate= useNavigate();

  async function handleRegister(e){
    e.preventDefault();

    if(email !== '' && password !== ''){
      await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/admin', {replace: true})
      })
      .catch((error) => {
        console.log(error);
        //alert("Erro ao fazer o cadastro " + error);
      });
    } else{
      //alert("Ow! preenche direitin todos os campos");
    }

   
  }

    return(
      <div className="home-container">
        <h1>Cadastre-se</h1>
        <span>Vamos criar sua conta</span>

        <form className="form" onSubmit={handleRegister}>
        <input
            type="text"
            defaultValue={email}
            placeholder="Email"
            onChange={(e) => { setEmail(e.target.value) }}
            />

          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => { setPassword(e.target.value) }}
            />

            <button type="submit">Acessar</button>
        </form>

        <Link className="button-link" to="/">já possui uma conta? Faça o login</Link>

      </div>
    );
  }
  
  export default Register;