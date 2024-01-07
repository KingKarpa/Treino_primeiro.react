import styles from './UrgencySection.module.css';

function UrgencySection({id, title, arraysByUrgency, toDoList, setToDoList}){
    // ==== CONSTANTES DE ESTILO do Componente ====
    // Define as constantes de estilo do componente que possuem nome dinâmico (varia com número de urgência do renderizado)
    const style_uSectionBg = styles[`uSectionBg_${id}`];
    const style_uConstrastBg = styles[`uContrastBg_${id}`];

    // ==== FUNÇÃO do Componente ====
    // Evento ativado ao clicar no bloco da tarefa (div), responsável por limpar a tarefa do display e da lista
    function clearToDo(e, toDo){
        const toDoListClone = toDoList;
        const index = toDoListClone.indexOf(toDo);
        toDoListClone.splice(index, 1);
        setToDoList(toDoListClone);

        const toDoDiv = e.currentTarget;
        toDoDiv.remove();
        const sectionCounter = document.getElementById(`toDoCounter${id}`);
        --sectionCounter.innerHTML;
    }

    // ==== ESTRUTURA do Componente ====
    return (
        <section className={`${styles.Section} ${style_uSectionBg}`}>
            <div className={`${styles.Section_title} ${style_uConstrastBg}`}>
                <h2>{title}</h2>
                {arraysByUrgency && arraysByUrgency[id] ? <p id={`toDoCounter${id}`}>{arraysByUrgency[id].length}</p> : <p id={`toDoCounter${id}`}>0</p>}
            </div>
            {arraysByUrgency && arraysByUrgency[id] &&
                <>
                    {arraysByUrgency[id].map((toDo, index) => (
                        <div key={`${id}-${index}`} onClick={(e) => clearToDo(e, toDo)} className={`${styles.Section_toDoItem} ${style_uConstrastBg}`}>
                            <h3>{toDo.title}</h3>
                            <p>{toDo.description}</p>
                        </div>
                    ))}
                </>
            }
        </section>
    )
}

export default UrgencySection;