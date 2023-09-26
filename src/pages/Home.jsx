//Components
import Header from "../components/Header"
import Slider from "../components/Slider"
//Styles
import styles from "../modules/Home.module.css"
//Imagenes
import noticia_imagenes from "../assets/noticias/noticia_principal.jpg"

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
            <section className={styles.noticia_imagen}>
             <img src={noticia_imagenes} alt="Img" />
            </section>
            <section className={styles.cardbutton}>
              <button>Ver mas</button>
            </section>
          </article>
          <article  className={styles.articulo}> 
            <span>Titulo</span>
            <section className={styles.noticia_imagen}>
             <img src={noticia_imagenes} alt="Img" />
            </section>
            <section className={styles.cardbutton}>
              <button>Ver mas</button>
            </section>
          </article>
          <article  className={styles.articulo}> 
            <span>Titulo</span>
            <section className={styles.noticia_imagen}>
             <img src={noticia_imagenes} alt="Img" />
            </section>
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
