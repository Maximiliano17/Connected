//Styles
import styles from "../modules/Home.module.css"
//Imagenes
import equipo from "../assets/noticias/equipo.jpeg"

function SobreNosotros(){
    return(
        <>
         <div className={styles.sobreNosotros}>
          <section className={styles.info}>
            <h1> - Sobre Nosotros - </h1>
            <p>
             Seguramente te estarás preguntando cuál es la naturaleza de Connected World. Somos una empresa especializada en el desarrollo de software con enfoque tanto en soluciones institucionales como en aplicaciones informativas. Nuestro portafolio de servicios abarca el diseño y desarrollo de sistemas de gestión, aplicaciones web y móviles, así como la creación de sitios web de vanguardia. Contamos con un equipo altamente capacitado en tecnologías de vanguardia para ofrecer soluciones de software personalizadas y eficientes que satisfacen las necesidades de nuestros clientes en un entorno digital en constante evolución.
            </p>
          </section>
          <div className={styles.imagen}>
           <section className={styles.cuadro}> 
            <img src={equipo} alt="Foto" />
           </section>
          </div>
         </div>
        </>
    );
}   

export default SobreNosotros
