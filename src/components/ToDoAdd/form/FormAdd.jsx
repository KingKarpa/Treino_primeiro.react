import styles from './FormAdd.module.css';

function FormAdd({toDoData, setToDo, toDoList, setToDoList, msgStatus,setMsgStatus}){

    // ==== FUNÇÕES do Componente ====
    // Previne o refresh da página após submit, verifica os dados do objeto toDo inseridos pelo formulário e controla o fluxo para adição da tarefa na lista
    function verifyFormData(e){
        e.preventDefault();

        if (toDoData.title !== ""){
            if (verifyToDoList()) return;
            insertOnList();
        } else setMsgStatus('error');
    }

    // Controla o estado da mensagem feedback e verifica se a lista de tarefas está vazia, caso não esteja, impede a adição de tarefas com títulos duplicados
    function verifyToDoList(){
        if (!toDoList) return (setMsgStatus('success'), false);
        return toDoList.find(toDo => toDo.title === toDoData.title) ? (setMsgStatus('error'), true) : (setMsgStatus('success'), false);
    }
    
    // Caso as validações anteriores forem bem sucedidas, adciona a tarefa criada à lista de tarefas, mantendo as já existentes
    function insertOnList(){
        toDoList ? setToDoList( prevList => ([...prevList, toDoData])) : setToDoList([toDoData]);
    }

    // ==== ESTRUTURA do Componente ====
    return (
        <form onSubmit={verifyFormData} className={styles.Form}>
            <div>
                <label htmlFor="input-Title" className={styles.Form_label}>Título da Tarefa</label>
                <input type="text" id="input-Title" className={styles.Form_input} 
                    onChange={(e) => setToDo(prevData => ({...prevData, title: e.target.value.trim()}) )} 
                    autoComplete='off'
                />
            </div>
            <div>
                <label htmlFor="text-Descr" className={styles.Form_label}>Descrição da Tarefa</label>
                <textarea id="text-Descr" cols="25" rows="3" maxLength={80} className={styles.Form_textarea} 
                    onChange={(e) => setToDo(prevData => ({...prevData, description: e.target.value.trim()}) )}>
                </textarea>
            </div>
            <div>
                <label htmlFor="select-Urgen" className={styles.Form_label}>Urgência da Tarefa</label>
                <select id="select-Urgen" className={styles.Form_select} 
                    onChange={(e) => setToDo( prevData => ({...prevData, urgency: e.target.value}) )}
                >
                    <option value="0" hidden>Selecione...</option>
                    <option value="1">Baixa</option>
                    <option value="2">Moderada</option>
                    <option value="3">Alta</option>
                </select>
            </div>

            {!msgStatus ? 
            <input type="submit" value="Adicionar à Lista" className={styles.Form_submit}/> 
            : 
            <input type="submit" value="Adicionar à Lista" disabled className={`${styles.Form_submit} ${styles.uSubmit_disabled}`}/>
            }
        </form>
    )
}

export default FormAdd;