//Components
import Header from "../components/Header"
//Styles
import styles from "../modules/Eventos.module.css"
//Imagenes
import eventoBanner from "../assets/banners/eventoJuan.jpeg"
//Json
import exjson from "../json/eventos.json"
import { useState } from "react"

const categoryLabels = [
  {
    category: "pañol",
    label: "Pañol"
  },
  {
    category: "petzify",
    label: "Petzify"
  }
]

function Eventos() {
    const [elementosAMostrar, setElementosAMostrar] = useState(exjson);

    const filtrarEventosPor = (category) => {
      if (category === "all") 
        setElementosAMostrar(exjson);
      else
        setElementosAMostrar(exjson.filter(item => item.category === category));
    }

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
            <button onClick={ () => filtrarEventosPor("all") }>Todo</button>
            {
              exjson.reduce((categories, jsonItem) => {
                if (!categories.includes(jsonItem.category))
                  categories.push(jsonItem.category);

                  return categories;
              }, [])
              .map((category) => (
                 <button key={ category } onClick={ () => filtrarEventosPor(category) }>
                  {
                    categoryLabels.find(item => item.category === category)?.label !== undefined ?
                    categoryLabels.find(item => item.category === category)?.label
                    :
                    category
                  }
                 </button> 
              ))
            }
            {/* <button onClick={ () => filtrarEventosPor("all") }>Todo</button> 
            <button onClick={ () => filtrarEventosPor("petzify") }>Petzify</button>
            <button onClick={ () => filtrarEventosPor("pañol") }>Pañol</button>
            <button onClick={ () => filtrarEventosPor("codigoazul") }>Codigo Azul</button> */}
          </section> 
          <section className={styles.content}>  
            <div className={styles.contentCard}>
            {elementosAMostrar.map(ex => (
                      <div key={ex.id} className={styles.exjson}>  
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