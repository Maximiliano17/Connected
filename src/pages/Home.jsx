//Components
import Header from "../components/Header"
import SobreNosotros from "../components/SobreNosotros"
import Noticia from "../components/Noticia"
//Styles
import styles from "../modules/Home.module.css"
import Developers from "../components/Developers"

function Home() {
  return (
    <>
      <Header />
      <div className={styles.containerHome}>
        <SobreNosotros />
        <Developers />
      </div>
    </>
  )
}

export default Home
