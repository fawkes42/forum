import { formatDistanceToNow } from 'date-fns';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post({ author, publishedAt, content }) {

    const publishedDate = new Date(publishedAt)
        .toLocaleDateString(
            'en-US',
            {
                day: 'numeric',
                month: 'numeric',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
            }
        );

    // difference between publiched date and current date in days, hours, minutes, seconds
    const difference = (new Date() - new Date(publishedAt)) / 1000;
    const days = Math.floor(difference / 86400);
    const hours = Math.floor(difference / 3600) % 24;
    const minutes = Math.floor(difference / 60) % 60;
    const seconds = Math.floor(difference) % 60;



    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <div className={styles.avatar}>
                        <Avatar src={author.avatarUrl} useGradient />
                    </div>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time
                    title={
                        new Date(publishedDate).toLocaleDateString(
                            'en-US',
                            {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric',
                                hour: 'numeric',
                                minute: 'numeric',
                            }
                        )
                    }
                    dateTime={publishedDate}
                >
                    Published {
                        formatDistanceToNow(
                            new Date(publishedAt),
                            { addSuffix: true }
                        )
                    }
                </time>
            </header>

            <div className={styles.content}>
                {
                    content.map((c, index) => {
                        if (c.type === 'paragraph') {
                            return (
                                <p key={index}>
                                    {c.text}
                                </p>
                            )
                        }
                        else if (c.type === 'link') {
                            return (
                                <p key={index}>
                                    <a href="">{c.text}</a>
                                </p>
                            )
                        }
                    })
                }
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