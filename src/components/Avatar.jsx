import styles from './Avatar.module.css';
export function Avatar({ src, useGradient = false }) {
    return <div className={useGradient ? styles.avatarGradient : styles.avatarGray}>
        <img src={src} alt="User's avatar" />
    </div>
}