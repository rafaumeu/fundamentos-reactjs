import styles from './App.module.css'
import { Header } from "./components/header"
import { SideBar } from './components/SideBar'
import './global.css'
import { Post } from './Post'
export function App() {


  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
        <Post 
            author="Rafael Dias" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatum alias. Eius dolorum doloribus, blanditiis commodi officia nostrum veritatis sed praesentium natus optio eaque? Molestias est corporis pariatur aliquam laudantium?"
          />
          <Post 
            author="Josimeire" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum qui voluptates voluptatem. Aperiam delectus sequi saepe dolore reprehenderit aut nesciunt? Praesentium, nesciunt dicta amet eveniet iste consequatur impedit. Porro, odio?"
          />
        </main>
      </div>
    </>
    
    
  )
}

