import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import './home.css';
import { auth } from '../../firebaseConnection';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Home(){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate= useNavigate();

  async function handleLogin(e){
    e.preventDefault();

    if(email !== '' && password !== ''){
      
      await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate('/admin', {replace: true});
      })
      .catch( (error) => {
        alert("Erro ao fazer o login: " + error);
      } );

    } else{
      alert("Ow! preenche direitin todos os campos");
    }

   
  }

    return(
      <div className="home-container">
        <h1>Lista de tarefas</h1>
        <span>Descomplique seu dia!<br/>Gerencia suas tarefas de forma fácil e simples</span>

        <form className="form" onSubmit={handleLogin}>
          <input
            type="text"
            value={email}
            placeholder="Email"
            onChange={(e) => { setEmail(e.target.value) }}
            />

          <input
            value={password}
            type="password"
            placeholder="Senha"
            onChange={(e) => { setPassword(e.target.value) }}
            />

            <button type="submit">Acessar</button>
        </form>

        <Link className="button-link" to="/register">Não possui uma conta? Cadastre-se</Link>

      </div>
    );
  }
  
  export default Home;