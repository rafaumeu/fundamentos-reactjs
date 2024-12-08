import { PencilLine } from 'phosphor-react'
import styles from './SideBar.module.css'
export function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://media.istockphoto.com/id/1205815347/pt/foto/abstract-binary-background.jpg?s=2048x2048&w=is&k=20&c=a30Pin4rdcpagwBxphKzoXgmmH8mIz258hBeltxlNtg="  alt="" />
      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/rafaumeu.png"  />
        <strong>Rafael Dias</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
         <PencilLine size={20} /> Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}