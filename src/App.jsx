import { Header } from "./components/header"
import './global.css'
import { Post } from "./Post"
export function App() {


  return (
    <>
      <Header />
      <Post 
        author="Rafael Dias" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, voluptatum alias. Eius dolorum doloribus, blanditiis commodi officia nostrum veritatis sed praesentium natus optio eaque? Molestias est corporis pariatur aliquam laudantium?"
        />
      <Post author="Josimeire" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum qui voluptates voluptatem. Aperiam delectus sequi saepe dolore reprehenderit aut nesciunt? Praesentium, nesciunt dicta amet eveniet iste consequatur impedit. Porro, odio?"/>
    </>
    
    
  )
}

