//Styles
import styles from "../modules/Header.module.css"
//React nav
import { Link } from "react-router-dom"

function Header() {
    return (
      <>
       <header className={styles.header}>
         <div className={styles.logo}>
          Logo
         </div>
         <nav className={styles.nav}> 
         <Link to={`/Home`} className={styles.nav_item}>
            Home 
          </Link> 
          <Link to={`/Home`} className={styles.nav_item}>
            Home 
          </Link>
          <Link to={`/Home`} className={styles.nav_item}>
            Home 
          </Link>
        </nav> 
        <div className={styles.op}>
          Opciones
        </div>
        <div className={styles.burgerRes}>
            burger
        </div>
       </header> 
      </>
    ) 
  }
  
  export default Header
  