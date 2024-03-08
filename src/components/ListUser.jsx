import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function ListUser() {

    //STATE PARA RECEBER DADOS VINDOS DA API 
const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
    
    axios.get('https://api-nodejs-lyart.vercel.app/').then(function(response) {
        console.log(response.data);
        setUsers(response.data);

    });
}

// FUNÇÃO PARA REMOÇÃO DE DADOS

const deleteUser = (id) => {
    axios.delete(`https://api-nodejs-lyart.vercel.app/${id}/delete`).then(function(response){
        console.log(response.data);
        getUsers(response.data);
    });
}

// RETORNANDO LISTA DE DADOS COLOCANDO EM UMA TABELA DINÂMICA

    return (
        <div>
           
        <h1>List Users</h1>
        
        
<table>
    <thead>
        <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Ações</th>
            
        </tr>
    </thead>
    <tbody>
    {users.map((user, key) => (
         <tr key={key}>
         <td className="Listar">{user.id}</td>
         <td className="Listar">{user.nome}</td>
         <td className="Listar">{user.telefone}</td>
         <td className="Listar">{user.email}</td>
         <td className="Listar">
            <Link className="editar" to={`user/${user.id}/edit`} style={{marginRight: "10px"}}>Editar</Link>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
         </td>
     </tr>
    ))
   
  
    }
       
    </tbody>
</table>
        </div>
    )
}
