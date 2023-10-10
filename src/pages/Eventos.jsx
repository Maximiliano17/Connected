//Components
import Header from "../components/Header"
import Slider from "../components/Slider"
//Styles
import styles from "../modules/Eventos.module.css"
//Imagenes
import imagen from "../assets/img/sobreMiMaxi.jpeg"
function Eventos() {
    return ( 
      <> 
      <Header />
      <div className={styles.eventosContainer}> 
        <div className={styles.eventosHome}>
        
        </div>
        <div className={styles.eventosSec}>
        <section className={styles.sliderInfo}>
            <div className={styles.sliderSection}>
             <Slider />
            </div>
          </section>
          <section className={styles.slider}>
          <img src={imagen} alt="Logo Expo" />
          <h2>HECHO EN MERLO</h2>
           <p>
            Fuimos partícipes de la feria "Hecho en Merlo", en la cual presentamos nuestro nuevo proyecto, Petzify, una red social para dispositivos móviles. En esta feria conseguimos una gran cantidad de nuevos usuarios, junto con un bono para investigación de 150 mil pesos argentinos.
           </p>
          <section className={styles.has}>
            <span>#Merlo</span>
            <span>#HechoEnMerlo</span>
            <span>#IntendenteVisita</span>
            <span>#Petzify</span>
          </section>
          </section>
        </div>
        <div className={styles.eventosSec}>
        <section className={styles.sliderInfo}>
            <div className={styles.sliderSection}>
             <Slider />
            </div>
          </section>
          <section className={styles.slider}>
          <img src={imagen} alt="Logo Expo" />
          <h2>FERIA DE CIENCIAS Y TECNOLOGIAS NIVEL PROVINCIAL</h2>
           <p>
            Fuimos partícipes de la feria "Hecho en Merlo", en la cual presentamos nuestro nuevo proyecto, Petzify, una red social para dispositivos móviles. En esta feria conseguimos una gran cantidad de nuevos usuarios, junto con un bono para investigación de 150 mil pesos argentinos.
           </p>
          <section className={styles.has}>
            <span>#Merlo</span>
            <span>#HechoEnMerlo</span>
            <span>#IntendenteVisita</span>
            <span>#Petzify</span>
          </section>
          </section>
        </div>
      </div>
      </>
    )
}

export default Eventos