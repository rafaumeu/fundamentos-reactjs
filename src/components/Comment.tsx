import { HandsClapping, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}
export function Comment({content, onDeleteComment}: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)
  function handleDeleteComment() {
    onDeleteComment(content)
  }
  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/rafaumeu.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong> Rafael Dias </strong>
              <time title="11 de maio às 08:13" dateTime="2022-05-11 08:13:30"> Cerca de 1h atrás</time>
            </div>
            <div title='Deletar comentário'>
              <button onClick={handleDeleteComment}>
                <Trash size={20}/>
              </button>
            </div>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <HandsClapping />
            Aplaudir
            <span>{likeCount}</span>
          </button>  
        </footer>  
      </div> 
    </div>
  )
}