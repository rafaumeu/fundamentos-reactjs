import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import styles from './Post.module.css'

interface Author {
  name: string
  avatarUrl: string
  role: string
}
interface Content {
  type: 'paragraph' | 'link' | 'hashtag',
  content: string
}
export interface PostType{
  id: number
  author: Author
  content: Content[]
  publishedAt: Date
}
interface PostProps {
  post: PostType
}
export function Post({post}: PostProps) {
  const [comments, setComments] = useState<string[]>([])
  const [newCommentText, setNewCommentText] = useState<string>('')
  const publishedDateFormatted = format(post.publishedAt, "dd 'de' LLLL 'as' HH:mm'h'",{locale: ptBR})
  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true
  })
  
  function handleCreateNewComment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }
  function handleNewCommentChanged(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewCommentText(event.target.value)
  }
  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório')
  }
  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return  comment !== commentToDelete
    })
    setComments(commentsWithoutDeletedOne)
  }
  const isNewCommentEmpty = newCommentText.length === 0
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong> {post.author.name} </strong>
            <span> {post.author.role} </span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}> {publishedDateRelativeToNow} </time>
      </header>
      <div className={styles.content}>
        {post.content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          } else if (line.type === 'hashtag') {
            return <p key={line.content}><a href="#">{`#${line.content}`}</a></p>
          }
        })}
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          name="comment" 
          placeholder="Deixe um comentário" 
          value={newCommentText}
          onChange={handleNewCommentChanged}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>       
          <button type="submit" disabled={isNewCommentEmpty}>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment key={comment} onDeleteComment={deleteComment} content={comment} />
          )
        })}
      </div>
    </article>

  )
}