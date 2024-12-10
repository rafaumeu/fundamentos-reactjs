import styles from './App.module.css'
import { Header } from './components/Header'
import { Post, PostType } from './components/Post'
import { SideBar } from './components/SideBar'
import './global.css'

export function App() {
  
  const posts: PostType[] = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/diego3g.png',
        name: 'Diego Fernandes',
        role: 'CTO @Rocketseat'
      },
      content: [
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: '👉 jane.design/doctorcare' },
        { type: 'hashtag', content: 'novoprojeto' },
        { type: 'hashtag', content: 'nlw' },
        { type: 'hashtag', content: 'rocketseat' }
      ],
      publishedAt: new Date('2024-11-20 19:30:00')
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/maykbrito.png',
        name: 'Mayk Brito',
        role: 'Educator @Rocketseat'
      },
      content: [
        { type: 'paragraph', content: 'E aí, pessoal! 😄' },
        { type: 'paragraph', content: 'Hoje quero compartilhar com vocês meu mais novo projeto! Foi desenvolvido durante a trilha Ignite da Rocketseat. O nome dele é DevConnect 🌟' },
        { type: 'link', content: '👉 devconnect.app' },
        { type: 'hashtag', content: 'projetonovo' },
        { type: 'hashtag', content: 'ignite' },
        { type: 'hashtag', content: 'rocketseat' }
      ],
    
      publishedAt: new Date('2024-12-08 11:50:00')
      }
  ]

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                post={post}
              />
            )
          })}
        </main>
      </div>
    </>
    
  )
}

