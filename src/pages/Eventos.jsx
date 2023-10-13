//Components
import Header from "../components/Header"
//Styles
import styles from "../modules/Eventos.module.css"
//Imagenes
import eventoBanner from "../assets/banners/eventoJuan.jpeg"
import maxi from "../assets/sistemas/Crear Areas.jpeg"
//Json
import exjson from "../json/eventos.json"
function Eventos() {
    return (  
      <> 
      <Header />
      <div className={styles.eventosContainer}> 
        <div className={styles.eventosHome}>
          {/*Imagen Evento*/} 
          <section className={styles.eventImagen}>
           <img src={eventoBanner} alt="ImagenEvent" />
         </section>
         {/*Info Evento*/}
          <section className={styles.eventInfo}>
            <h1> Eventos</h1>
            <p> 
             En Connected World, participamos activamente en diversos eventos, con el objetivo de exhibir ante el público lo mejor de nuestros sistemas y aplicaciones. A continuación, destacaremos algunas de nuestras actuaciones más destacadas en ferias, eventos y exposiciones.
            </p>    
          </section>
        </div> 
        <div className={styles.cardEvents}>
          <section className={styles.nabvar}>
            <button>Todo</button> 
            <button>Petzify</button>
            <button>Pañol</button>
            <button>Codigo Azul</button>
          </section> 
          <section className={styles.content}>  
            <div className={styles.contentCard}>
            {exjson.map(ex => (
                      <div className={styles.exjson}>  
                          <h2> {ex.name}</h2> 
                         {ex.imagen && <img alt="Expo" src={ex.imagen} />}
                          <p>{ex.info}</p>
                      </div>   
                      ))}  
            </div>
          </section>
        </div>
      </div>
      </>
    )
}

export default Eventos