//Components
import Header from "../components/Header"
//Styles
import  styles from "../modules/Sistemas.module.css"
//Imagenes
import sistemas from "../assets/sistemas/sistemasFoto.jpeg"
function Sistemas() {
    return ( 
      <> 
      <Header />
       <div className={styles.sistemasContent}> 
         <img src={sistemas} alt="Foto Sistemas" />
         <section className={styles.infoSis}>
            <h1>System of Stock</h1>
            <p>
             Pañol es un proyecto que ofrece una solución completa para la gestión de herramientas en talleres, permitiendo hacer pedidos de forma rápida y eficiente, y controlando el stock de manera efectiva. Es una herramienta muy útil para mejorar la productividad en talleres y reducir el tiempo que se dedica a la gestión de herramientas.
            </p>
            <button>Conseguir</button>
           </section> 
       </div> 
       {/* <div className={styles.sistemasDisponibles}>
         Hola
       </div> */}
      </>
    ) 
  }
  
  export default Sistemas
  