import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Basics/header/Header';
import ToDoAdd from './components/ToDoAdd/ToDoAdd';
import ToDoList from './components/TodoList/ToDoList';

function App() {
  // ==== HOOKS do Componente ====
  // Recebe a lista de tarefas existentes
  const [toDoList, setToDoList] = useState(null);

  // ==== ESTRUTURA do Componente ====
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/primeiro-react' element={<ToDoList toDoList={toDoList} setToDoList={setToDoList} />} />
        <Route path='/primeiro-react/adicionarTarefa' element={<ToDoAdd toDoList={toDoList} setToDoList={setToDoList} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
