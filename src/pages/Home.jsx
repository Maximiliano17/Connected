//Components
import Header from "../components/Header"
import Slider from "../components/Slider"
//Styles
import styles from "../modules/Home.module.css"

function Home() {
  return (
    <>
      <Header />
      <div className={styles.containerHome}>
        <div className={styles.noticias}>
          <p> - Noticias - </p> 
        <div className={styles.slider}>
         <Slider />
        </div>
        <div className={styles.informacion}>
          <article  className={styles.articulo}>
            <span>Titulo</span>
            <p>
              Hola esta noticia trata de una historia relatada en tiempos inmemoriables de una forma imprecionante redactada.
            </p>
            <section className={styles.cardbutton}>
              <button>Ver mas</button>
            </section>
          </article>
        </div>
        </div>
      </div>
    </>
  )
}

export default Home
