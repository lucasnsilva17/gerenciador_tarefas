import { useState } from 'react';
import './admin.css';
import { auth } from '../../firebaseConnection';
import { signOut } from 'firebase/auth';

export default function Admin(){

    const [tarefaInput, setTarefaInput] = useState('');

    function handleRegistrarTarefa(e){
        e.preventDefault();
        alert("Clique");
    }

    async function handleLogout(){
        await signOut(auth);
    }

    return(
        <div className='admin-container'>
            <h1>Você está dentro</h1>

            <form className="form" onSubmit={handleRegistrarTarefa}>
                <textarea 
                    placeholder='Digite sua tarefa...'
                    value={tarefaInput}
                    onChange={(e)=> {setTarefaInput= e.target.value}}
                />
                <button className='btn-register' type="submit">Registrar tarefa</button>
            </form>

            <article className="list">
                <p>Fazer comprar hoje</p>
                <div>
                    <button>Editar</button>
                    <button className="btn-delete">Concluir</button>
                </div>
            </article>

            <button className="btn_logout" onClick={handleLogout}>Sair</button>
        </div>
    );
}