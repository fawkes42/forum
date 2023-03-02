import { formatDistanceToNow } from 'date-fns';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { IComment } from '../interfaces/Comments';
import { IPost } from '../interfaces/Post';
import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

interface PostProps {
    post: IPost;
}

export function Post({
    post: {
        id,
        author,
        publishedAt,
        content
    }
}: PostProps) {

    const [comments, setComments] = useState<IComment[]>([
        {
            id: 1,
            author: {
                name: 'John Doe',
                avatarUrl: 'https://i.pravatar.cc/209?img=67',
                role: 'Software Engineer'
            },
            publishedAt: new Date('2021-01-01T12:00:00.000Z'),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nunc nisl aliquam nisl, eget aliquam nunc nisl sit amet nisl.'
        }
    ]);

    const [newComment, setNewComment] = useState('');

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

    const handleFormSubmit = (event: FormEvent) => {
        event.preventDefault();
        setComments([...comments, {
            id: Math.floor(Math.random() * 1000),
            content: newComment,
            author: {
                name: 'John Doe',
                avatarUrl: `https://i.pravatar.cc/${comments.length * 100 + 1}?img=${comments.length + 1}`,
                role: 'Software Engineer'
            },
            publishedAt: new Date('2021-01-01T12:00:00.000Z'),
        }]);

        setNewComment('');
    }

    const handleNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        event.target.setCustomValidity('');
        setNewComment(event.target.value);
    }

    const handleInvalidFormSubmit = (event: InvalidEvent<HTMLTextAreaElement>) => {
        event.target.setCustomValidity('Comment cannot be published empty');
    }

    const isNewCommentEmpty = newComment.trim().length === 0;

    const deleteComment = (id: number) => {
        setComments(comments.filter((c) => c.id !== id));
    }

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

            <form onSubmit={handleFormSubmit} className={styles.commentForm}>
                <strong>Give your Feedback</strong>
                <textarea
                    name="comment"
                    placeholder='Give your comment'
                    value={newComment}
                    onChange={handleNewCommentChange}
                    onInvalid={handleInvalidFormSubmit}
                    required
                />
                <footer>
                    <button
                        type='submit'
                        disabled={isNewCommentEmpty}
                    >
                        Comment
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {
                    comments.map((comment) => {
                        if (comment) {
                            return (
                                <Comment
                                    key={comment.id}
                                    comment={comment}
                                    onDelete={deleteComment}
                                />
                            )
                        }
                    })
                }
            </div>
        </article>
    );
}