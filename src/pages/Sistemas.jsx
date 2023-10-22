//Components
import Header from "../components/Header"
//Styles
import  styles from "../modules/Sistemas.module.css"
//Imagenes

function Sistemas() {
    return ( 
      <> 
      <Header />
       <div className={styles.sistemasContent}> 
          <div className={styles.imagenhome}>
            <article className={styles.cardSistemas}>
               <h1>Sistemas</h1>  
               <div className={styles.content}>
                <p>En Connected World, ofrecemos sistemas pre creados para cubrir diversas necesidades empresariales. Listos para implementarse de inmediato, son ideales para empresas que buscan soluciones eficientes y probadas. Desde gestión empresarial hasta plataformas de comercio electrónico, nuestra colección abarca diversas áreas, proporcionando acceso rápido a soluciones tecnológicas de vanguardia. Simplificamos la adopción tecnológica, permitiendo a las empresas optimizar operaciones y mejorar rendimiento con soluciones confiables.</p>
               </div>
            </article> 
          </div>
       </div> 
      <div className={styles.sistemasDisponibles}>
        Hola
      </div>
      </>
    ) 
  }
  
  export default Sistemas
  