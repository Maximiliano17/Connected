//Components
import Header from "../components/Header"
import SobreNosotros from "../components/SobreNosotros"
import Noticia from "../components/Noticia"
//Styles
import styles from "../modules/Home.module.css"

function Home() {
  return (
    <>
      <Header />
      <div className={styles.containerHome}>
        <SobreNosotros />
      </div>
    </>
  )
}

export default Home
