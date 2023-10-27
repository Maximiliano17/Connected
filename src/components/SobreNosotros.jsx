//Styles
import styles from "../modules/Home.module.css"
//Imagenes
import sobreImagen from "../assets/sistemas/eventoConnected.jpeg"
function SobreNosotros(){
    return(
        <>
         <div className={styles.sobreNosotros}>
          <div className={styles.imagenSobre}> 
             <img src={sobreImagen} alt="Logo Sobre nosotros" />
          </div>
          <section className={styles.info}>
            <h1> Sobre Nosotros </h1>
            <p>
             Seguramente te estarás preguntando cuál es la naturaleza de Connected World. Somos una empresa especializada en el desarrollo de software con enfoque tanto en soluciones institucionales como en aplicaciones informativas. Nuestro portafolio de servicios abarca el diseño y desarrollo de sistemas de gestión, aplicaciones web y móviles, así como la creación de sitios web. Contamos con un equipo altamente capacitado en tecnologías de la más alta calidad para ofrecer soluciones de software personalizadas
            </p>
          </section>
         </div>
         <div className={styles.departamentos}>
            <article className={styles.cardDepa}>
              <h2>Sistemas:</h2>
             <p>
              Nuestro Departamento de Sistemas se dedica a la ingeniería de soluciones digitales, abordando desafíos específicos de instituciones mediante el desarrollo de software personalizado. Nuestro equipo de desarrolladores se distingue por su capacidad para idear e implementar soluciones innovadoras que optimizan procesos y maximizan la eficiencia operativa. Además, ofrecemos sistemas personalizados que se adaptan a las necesidades únicas de cada cliente.
             </p>
            </article>
            <article className={styles.cardDepa}>
              <h2>Eventos:</h2>
             <p>
             El Departamento de Eventos despliega nuestra innovación en diferentes ferias y exposiciones a nivel nacional e internacional. Aquí, no solo exhibimos nuestros proyectos, sino que también brindamos a los asistentes la oportunidad de experimentarlos directamente. Este enfoque interactivo y participativo fortalece nuestra conexión con el público y permite que nuestras soluciones tecnológicas sean apreciadas en un contexto práctico.
             </p>
            </article>
            <article className={styles.cardDepa}>
              <h2>Robótica:</h2>
             <p>
             En el Departamento de Robótica, nos sumergimos en el diseño y desarrollo de robots destinados tanto a competiciones desafiantes como al patrocinio de proyectos estudiantiles. Nuestro equipo experto trabaja en la vanguardia de la robótica, creando máquinas capaces de enfrentar los desafíos más exigentes. Además, estamos comprometidos con la educación y el apoyo a estudiantes, patrocinando y fomentando la participación en competiciones de robótica para cultivar el talento del futuro.
             </p>
            </article>
          </div>
        </>
    );
}   

export default SobreNosotros
