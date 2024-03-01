import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import CreateUser from './components/CreateUser';
import ListUser from './components/ListUser';
import EditUser from './components/EditUser';


// COMPONENTES DE ROTAS E LINKS

function App() {
  
  return (
 
    <div className="principal">
    
   <h3><u>Sistema de listagem, adição, edição e remoção de dados com <b> php, mysql, reactjs, html, css </b></u></h3>
   
<BrowserRouter>
<nav>
  <ul>
    <li>
      <Link to="/"><h2>List Users</h2></Link>
    </li>
    <li>
      <Link to="user/create"><h2>Create User </h2></Link>
    </li>
  </ul>
</nav>
<hr />
<Routes>
  <Route index element={<ListUser />} />
  <Route path='user/create' element={<CreateUser />} />
  <Route path='user/:id/edit' element={<EditUser />} />
</Routes>

</BrowserRouter>

   </div>
  );
}

export default App;