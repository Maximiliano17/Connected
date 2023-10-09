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
            <div className={styles.logoExpo}>
              <img src={imagen} alt="Logo Expo" />
            </div>
          </section>
          <section className={styles.slider}>
          <h2>HECHO EN MERLO</h2>
           <p>
             La "Expo Hecho en Merlo" es un evento anual que se celebra en el Parque Municipal Néstor Kirchner, ubicado en Av. Constitución 92, Merlo, Argentina. La quinta edición de la feria se lleva a cabo desde el 2 hasta el 6 de septiembre, con un horario de 12 a 20 horas, y la entrada es libre y gratuita.
             En este evento, más de 100 industrias, comerciantes y emprendedores de Merlo tienen la oportunidad de mostrar y dar a conocer a la comunidad los productos y servicios que producen. La feria destaca el desarrollo de las pequeñas y medianas empresas (Pymes), emprendedores e industrias locales.
             Además de la exposición de productos, la feria cuenta con un espacio dedicado a estudiantes de escuelas técnicas, donde se presentan tecnologías, productos locales y artesanales, así como la industria del Animé. También se llevan a cabo ciclos de charlas con la participación de especialistas, funcionarios e invitados.
           </p>
          <section className={styles.has}>
            <span>#Merlo</span>
            <span>#HechoEnMerlo</span>
            <span>#IntendenteVisita</span>
            <span>#VivaMilei</span>
            <span>#Cordoba</span>
          </section>
          </section>
        </div>
        <div className={styles.eventosSec}>
          <section className={styles.sliderInfo}>
            <div className={styles.logoExpo}>
              <img src={imagen} alt="Logo Expo" />
            </div>
          </section>
          <section className={styles.slider}>
          <h2>HECHO EN MERLO</h2>
           <p>
             La "Expo Hecho en Merlo" es un evento anual que se celebra en el Parque Municipal Néstor Kirchner, ubicado en Av. Constitución 92, Merlo, Argentina. La quinta edición de la feria se lleva a cabo desde el 2 hasta el 6 de septiembre, con un horario de 12 a 20 horas, y la entrada es libre y gratuita.
             En este evento, más de 100 industrias, comerciantes y emprendedores de Merlo tienen la oportunidad de mostrar y dar a conocer a la comunidad los productos y servicios que producen. La feria destaca el desarrollo de las pequeñas y medianas empresas (Pymes), emprendedores e industrias locales.
             Además de la exposición de productos, la feria cuenta con un espacio dedicado a estudiantes de escuelas técnicas, donde se presentan tecnologías, productos locales y artesanales, así como la industria del Animé. También se llevan a cabo ciclos de charlas con la participación de especialistas, funcionarios e invitados.
           </p>
          <section className={styles.has}>
            <span>#Merlo</span>
            <span>#HechoEnMerlo</span>
            <span>#IntendenteVisita</span>
            <span>#VivaMilei</span>
            <span>#Cordoba</span>
          </section>
          </section>
        </div>
        <div className={styles.eventosSec}>
          <section className={styles.sliderInfo}>
            <div className={styles.logoExpo}>
              <img src={imagen} alt="Logo Expo" />
            </div>
          </section>
          <section className={styles.slider}>
          <h2>HECHO EN MERLO</h2>
           <p>
             La "Expo Hecho en Merlo" es un evento anual que se celebra en el Parque Municipal Néstor Kirchner, ubicado en Av. Constitución 92, Merlo, Argentina. La quinta edición de la feria se lleva a cabo desde el 2 hasta el 6 de septiembre, con un horario de 12 a 20 horas, y la entrada es libre y gratuita.
             En este evento, más de 100 industrias, comerciantes y emprendedores de Merlo tienen la oportunidad de mostrar y dar a conocer a la comunidad los productos y servicios que producen. La feria destaca el desarrollo de las pequeñas y medianas empresas (Pymes), emprendedores e industrias locales.
             Además de la exposición de productos, la feria cuenta con un espacio dedicado a estudiantes de escuelas técnicas, donde se presentan tecnologías, productos locales y artesanales, así como la industria del Animé. También se llevan a cabo ciclos de charlas con la participación de especialistas, funcionarios e invitados.
           </p>
          <section className={styles.has}>
            <span>#Merlo</span>
            <span>#HechoEnMerlo</span>
            <span>#IntendenteVisita</span>
            <span>#VivaMilei</span>
            <span>#Cordoba</span>
          </section>
          </section>
        </div>
      </div>
      </>
    )
}

export default Eventos