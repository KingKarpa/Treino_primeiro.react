import { useEffect, useState } from 'react';
import FormAdd from "./form/FormAdd";
import StatusMsg from './status/StatusMsg';
import styles from './ToDoAdd.module.css';

function ToDoAdd({toDoList, setToDoList}){
    // ==== HOOKS do Componente ====
    // Controla o estado de exibição da mensagem feedback após submit do formulário
    const [msgStatus, setMsgStatus] = useState(null);

    // Controla o tempo de vida da mensagem feedback e redefine seu estado
    useEffect(() => {
        if (msgStatus){
            const msgLifeSpanId = setTimeout(() => {
                setMsgStatus(null);
            }, 4000);

            return () => clearTimeout(msgLifeSpanId);
        }
    }, [msgStatus]);

    // Recebe os dados da tarefa que foram inseridos no formulário
    const [toDoData, setToDo] = useState({
        title: '',
        description: 'Sem descrição.',
        urgency: '0'
    });

    // ==== ESTRUTURA do Componente ====
    return (
        <main className={styles.Main}>
            <h2 className={styles.Main_title}>Adicione uma Tarefa</h2>
            <FormAdd 
                toDoData={toDoData} setToDo={setToDo}
                toDoList={toDoList} setToDoList={setToDoList}
                msgStatus={msgStatus} setMsgStatus={setMsgStatus}
            ></FormAdd>
            {msgStatus && <StatusMsg msgStatus={msgStatus}></StatusMsg>}
        </main>
    )
}

export default ToDoAdd;