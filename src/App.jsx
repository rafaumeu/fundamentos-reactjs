import styles from './App.module.css'
import { Header } from "./components/header"
import { Post } from './components/Post'
import { SideBar } from './components/SideBar'
import './global.css'

export function App() {


  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Post />
          <Post />
        </main>
      </div>
    </>
    
  )
}

