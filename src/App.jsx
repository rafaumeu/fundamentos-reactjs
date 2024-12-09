import styles from './App.module.css'
import { Header } from "./components/header"
import { Post } from './components/Post'
import { SideBar } from './components/SideBar'
import './global.css'

export function App() {
  const posts = [
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
        { type: 'paragraph', content: 'Fala galeraa 👋' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
        { type: 'link', content: '👉 jane.design/doctorcare' },
        { type: 'hashtag', content: ' novoprojeto' },
        { type: 'hashtag', content: ' nlw' },
        { type: 'hashtag', content: ' rocketseat' }
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
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </>
    
  )
}

