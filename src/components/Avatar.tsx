import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    useGradient?: boolean;
}

export function Avatar({ useGradient = false, alt = "User's avatar", ...props }: AvatarProps) {
    return (
        <div
            className={useGradient ? styles.avatarGradient : styles.avatarGray}
        >
            <img
                alt={alt}
                {...props}
            />
        </div>
    )
}