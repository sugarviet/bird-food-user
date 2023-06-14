import styles from './Comment.module.css'
import {Button,Input } from 'antd';

const { TextArea } = Input;
const Comment = () => {
    return (
        <div>
            <h1 className={styles.blogFooter}>Leave a comment</h1>
            <div className={styles.blogCommentFooter}>
                <TextArea style={{ border: '2px solid #ced4da' }} rows={4} placeholder="Enter your comment..." maxLength={6} />
            </div>
            <div className={styles.coverButton}>
                <Button
                    className={styles.button}
                    type="primary"
                >
                    <p className={styles.textButton}>Post</p>
                </Button>
            </div>
        </div>
    )
}
export default Comment;