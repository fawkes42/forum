import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(props) {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <div className={styles.avatar}>
                        <Avatar src={props.avatar} useGradient />
                    </div>
                    <div className={styles.authorInfo}>
                        <strong>{props.author}</strong>
                        <span>{props.content}</span>
                    </div>
                </div>
                <time title="September 06 at 09:25" dateTime='2022-09-06 09:25:00'>
                    Published on 06/09/2022
                </time>
            </header>

            <div className={styles.content}>
                <p>Hello guys</p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. In magnam odio necessitatibus ipsum! Molestias vel maxime ut nulla, illum, similique explicabo suscipit aperiam unde vitae, pariatur nesciunt dolores libero debitis.
                </p>
                <p>
                    <a href="#">fawkes42</a>
                </p>
                <p>
                    <a href="#">#development #nlw #react</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Give your Feedback</strong>
                <textarea placeholder='Give your comment' />
                <footer>
                    <button type='submit'>Comment</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    );
}