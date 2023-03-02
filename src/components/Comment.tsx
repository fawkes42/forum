import { formatDistanceToNow } from 'date-fns';
import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { IComment } from '../interfaces/Comments';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps {
    comment: IComment;
    onDelete: (id: number) => void;
}

export function Comment(
    {
        comment: { id, author, publishedAt, content },
        onDelete,
    }: CommentProps
) {
    const [likes, setLikes] = useState<number>(0);

    const handleLike = () => {
        setLikes(likes + 1);
    }

    const handleDeleteComment = () => {
        onDelete(id);
    }

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

    return (
        <div className={styles.comment}>
            <Avatar src={author.avatarUrl} />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <span className={styles.author}>
                                {author.name}
                            </span>
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
                        </div>
                        <button title='Delete comment' onClick={handleDeleteComment}>
                            <Trash size={24} />
                        </button>
                    </header>
                    <p className={styles.commentText}>
                        {content}
                    </p>
                </div>
                <footer>
                    <button title='Like comment' onClick={handleLike}>
                        <ThumbsUp size={20} />
                        Like
                        <span>{likes}</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}