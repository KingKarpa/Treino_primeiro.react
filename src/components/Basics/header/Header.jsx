import { Link } from 'react-router-dom';
import styles from './Header.module.css';

function Header(){
    // ==== ESTRUTURA do Componente ====
    return (
        <header className={styles.Header}>
            <div className={styles.Header_logo}>LOGO</div>
            <nav className={styles.Header_nav}>
                <Link to="/primeiro-react">
                    <button>Lista</button>
                </Link>
                <Link to="/primeiro-react/adicionarTarefa">
                    <button>+ Tarefa</button>
                </Link>
            </nav>
        </header>
    )
}

export default Header;