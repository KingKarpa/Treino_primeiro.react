import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Router config
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import ToDoList from './components/TodoList/ToDoList.jsx';
// import ToDoAdd from './components/ToDoAdd/ToDoAdd.jsx';

// const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <App />,
//         children: [
//             {
//                 path: "/",
//                 element: <ToDoList />
//             },
//             {
//                 path: "/AdicionarTarefa",
//                 element: <ToDoAdd />
//             }
//         ]
//     }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
