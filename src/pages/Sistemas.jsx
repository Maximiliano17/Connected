//Components
import Header from "../components/Header"
import BarOptions from "../components/barraOpciones"
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
                 <p> 
                    Seguramente te estarás preguntando cuál es la naturaleza de Connected World. Somos una empresa especializada en el desarrollo de software con enfoque tanto en soluciones institucionales como en aplicaciones informativas. Nuestro portafolio de servicios abarca el diseño y desarrollo de sistemas de gestión, aplicaciones web y móviles, así como la creación de sitios web de vanguardia. Contamos con un equipo altamente capacitado en tecnologías de vanguardia para ofrecer soluciones de software personalizadas y eficientes que satisfacen las necesidades de nuestros clientes en un entorno digital en constante evolución. 
                   </p>
               </div>
            </article> 
            <article className={styles.cardSistemas}>
               <h1>Sistemas Personalizados</h1>  
               <div className={styles.content}>
                 <p>
                    Seguramente te estarás preguntando cuál es la naturaleza de Connected World. Somos una empresa especializada en el desarrollo de software con enfoque tanto en soluciones institucionales como en aplicaciones informativas. Nuestro portafolio de servicios abarca el diseño y desarrollo de sistemas de gestión, aplicaciones web y móviles, así como la creación de sitios web de vanguardia. Contamos con un equipo altamente capacitado en tecnologías de vanguardia para ofrecer soluciones de software personalizadas y eficientes que satisfacen las necesidades de nuestros clientes en un entorno digital en constante evolución. 
                  </p>
               </div>
            </article> 
          </div>
       </div> 
       
      </>
    ) 
  }
  
  export default Sistemas
  