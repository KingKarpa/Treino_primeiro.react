import styles from './StatusMsg.module.css';

function StatusMsg({msgStatus}){

    // ==== ESTRUTURA do Componente ====
    return (
        <div className={styles.Msg}>
            {msgStatus === 'success' && <p className={styles.Msg_success}>A tarefa foi listada</p>}
            {msgStatus === 'error' && <p className={styles.Msg_error}>A tarefa não pôde ser listada</p>}
        </div>
    )
}

export default StatusMsg;