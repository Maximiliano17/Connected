//Components
import Header from "../components/Header"
//Styles
import  styles from "../modules/Home.module.css"
//Imagenes
import Noticia from "../assets/noticias/noticia_principal.jpg"

function Sistemas() {
    return ( 
      <>
      <Header />
       <div className={styles.containerHome}>
          <div className={styles.noticias}>
           Sistemas 
          </div>
       </div> 
      </>
    ) 
  }
  
  export default Sistemas
  