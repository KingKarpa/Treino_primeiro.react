import styles from './ToDoList.module.css';
import UrgencySection from './UrgencySection/UrgencySection';

function ToDoList({toDoList, setToDoList}){

    // ==== VARIÁVEL do Componente ====
    // Separa a lista de tarefas por urgência em até 4 conjuntos menores de tarefas enumerados e nomeados de 0 à 3
    let arraysByUrgency;
    if (toDoList){
        arraysByUrgency = toDoList.reduce((arrays, toDoObject) => {
            const urgency = toDoObject.urgency;
            !arrays[urgency] ? arrays[urgency] = [] : {};
            arrays[urgency].push(toDoObject);
            return arrays;
        }, {});
    }

    // ==== ESTRUTURA do Componente ====
    return (
        <main className={styles.Main}>
            <UrgencySection id={0} title="Nenhuma Urgência" 
            arraysByUrgency={arraysByUrgency}
            toDoList={toDoList} setToDoList={setToDoList}
            />
            <UrgencySection id={1} title="Urgência Baixa" 
            arraysByUrgency={arraysByUrgency}
            toDoList={toDoList} setToDoList={setToDoList}
            />
            <UrgencySection id={2} title="Urgência Moderada" 
            arraysByUrgency={arraysByUrgency}
            toDoList={toDoList} setToDoList={setToDoList}
            />
            <UrgencySection id={3} title="Urgência Alta" 
            arraysByUrgency={arraysByUrgency}
            toDoList={toDoList} setToDoList={setToDoList}
            />
        </main>
    )
}

export default ToDoList;