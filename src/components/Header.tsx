import styles from './Header.module.css';
import DogLogo from '../assets/undraw-dog.svg'
export function Header() {
    return (
        <header className={styles.header}>
            <img src={DogLogo} alt="Undraw Dog" className={styles.logo} />
        </header>
    );
}