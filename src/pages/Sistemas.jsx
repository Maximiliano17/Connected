//Components
import Header from "../components/Header"
//Styles
import  styles from "../modules/Sistemas.module.css"
//Imagenes
import sistemas from "../assets/sistemas/sistemasFoto.jpeg"
import app from "../assets/sistemasCard/aplicacion.png"
import sistema from "../assets/sistemasCard/sistemas.png"
import escritoro from "../assets/sistemasCard/escritorio.png"
import tienda from "../assets/sistemasCard/tienda.png"
import robotica from "../assets/sistemasCard/robot.png"
import centro from "../assets/sistemas/pag.jpeg"
function Sistemas() {

    return (  
      <> 
      <Header />
       <div className={styles.sistemasContent}> 
         <img src={sistemas} alt="Foto Sistemas" />
         <section className={styles.infoSis}>
            <h1>Sistemas</h1>
            <p>
             El Departamento de Sistemas en Connected World se especializa en la ingeniería de soluciones digitales a medida para instituciones. Nuestro equipo de desarrolladores destaca por su capacidad para crear soluciones innovadoras que mejoran la eficiencia operativa. Ofrecemos sistemas personalizados que se ajustan a las necesidades individuales de cada cliente, abordando desafíos específicos a través del desarrollo de software personalizado.
            </p>
           </section> 
       </div> 
       <div className={styles.sistemasDisponibles}>
       <section className={styles.tituloComunidad}>
        <p>New Section</p>
       </section> 
         <div className={styles.nuestrosServicios}>
          {/*Crear card*/} 
               <article className={styles.opciones}>
                    <div className={styles.fotoOp}>
                     {/*Foto*/}
                     <img alt="Web" src={sistema} />
                    </div>
                    <div className={styles.infoOp}>
                        <h2>Sistemas Web</h2> 
                        <p>Desenvolvemos sistemas web tanto headless como tradicionais, com design responsivo.</p> 
                    </div>   
               </article> 
               <article className={styles.opciones}>
                    <div className={styles.fotoOp}>
                     {/*Foto*/}
                     <img alt="App" src={app} />
                    </div>
                    <div className={styles.infoOp}>
                        <h2>Aplicaciones</h2> 
                        <p>Desarrollamos aplicaciones móviles nativas, híbridas y PWA (Progressive Web Apps).</p> 
                    </div>   
               </article>
               <article className={styles.opciones}>
                    <div className={styles.fotoOp}>
                     {/*Foto*/}
                     <img alt="tienda" src={tienda} />
                    </div>
                    <div className={styles.infoOp}>
                        <h2>e-commerce</h2> 
                        <p>Creamos tiendas online en las principales plataformas de eCommerce.</p> 
                    </div>   
               </article>
               <article className={styles.opciones}>
                    <div className={styles.fotoOp}>
                     {/*Foto*/}
                     <img alt="Escritorio" src={escritoro} />
                    </div>
                    <div className={styles.infoOp}>
                        <h2>Software para escritorio</h2> 
                        <p>Desarrollamos aplicaciones móviles nativas, híbridas y PWA (Progressive Web Apps).</p> 
                    </div>   
               </article>
               <article className={styles.opciones}>
                    <div className={styles.fotoOp}>
                     {/*Foto*/}
                     <img alt="Robot" src={robotica} />
                    </div>
                    <div className={styles.infoOp}>
                        <h2>Robótica</h2> 
                        <p>Desarrollamos aplicaciones móviles nativas, híbridas y PWA (Progressive Web Apps).</p> 
                    </div>   
               </article>
          </div>
         </div> 
         <div className={styles.sistemasDis}>
         <section className={styles.tituloComunidad}>
           <p>Paginas Disponibles</p>
         </section>
           <div className={styles.infoPag}>
            Hola
           </div>
         </div>
      </>
    ) 
  }
  
  export default Sistemas
  