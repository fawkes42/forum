import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';
export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1610947796368-47874669c3be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=100"
            />

            <div className={styles.profile}>
                <div className={styles.avatar}>
                    <Avatar src="https://github.com/fawkes42.png" alt="pEDROk" />
                </div>
                <strong>Pedro Tozzi</strong>
                <span>Software Developer</span>
            </div>

            <footer>
                <a href="#">
                    Edit your Profile
                </a>
            </footer>
        </aside>
    )
}