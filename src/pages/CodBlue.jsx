//Components
import Header from "../components/Header"
import Slider from "../components/Slider"
//Styles
import  styles from "../modules/CodBlue.module.css"
//Imagenes
import imagen1 from "../assets/img/1.png"
import imagen2 from "../assets/img/2.png"
import imagen3 from "../assets/img/3.png"
import imagen4 from "../assets/img/4.png"
import logo from "../assets/logo/escuelaPañollogo.png" 
import card from "../assets/noticias/noticia_principal.jpg"
function CodBlue() {
    return ( 
      <> 
      <Header /> 
      <div className={styles.codBlueHome}>
        <section className={styles.slider}>
         <Slider />
        </section>
        <section className={styles.puntosCod}>
          <article className={styles.cardPuntos}>
            <img src={imagen1} />
            <p>
              Tus pacientes en un solo lugar.
            </p>
          </article>
          <article className={styles.cardPuntos}>
            <img src={imagen2} />
            <p>
              Crea y asigna personal medico.
            </p>
          </article>
          <article className={styles.cardPuntos}>
            <img src={imagen3} />
            <p>
              Monitorea tus areas.
            </p>
          </article>
          <article className={styles.cardPuntos}>
            <img src={imagen4} />
            <p>
              Ingresa a tus pacientes al hospital.
            </p>
          </article>
          
        </section>
         {/*
        <section className={styles.seccionesCod}>
            <div className={styles.homeCard}>
          <h1>¿Querés asociarte?</h1>
          <p>
          Contratá la mejor cobertura médica
          </p>
          <button>Conseguir</button>
         </div>
        </section>
        */}
      </div>
      </>
    ) 
}

export default CodBlue;