import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar src='https://github.com/fawkes42.png' />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <span className={styles.author}>fawkes42</span>
                            <time title="September 06 at 09:25" dateTime='2022-09-06 09:25:00'>
                                Published 1h ago
                            </time>
                        </div>
                        <button title='Delete comment'>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p className={styles.commentText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                        in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula.
                    </p>
                </div>
                <footer>
                    <button title='Like comment'>
                        <ThumbsUp size={20} />
                        Like
                        <span>42</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}