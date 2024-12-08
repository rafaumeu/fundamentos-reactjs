import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'
export function Comment() {
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
              <button>
                <Trash size={20}/>
              </button>
            </div>
          </header>
          <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir
            <span>20</span>
          </button>  
        </footer>  
      </div> 
    </div>
  )
}