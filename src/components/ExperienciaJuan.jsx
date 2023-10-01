//Styles
import styles from "../modules/Experiencia.module.css"
//Json
import experienciaJuan from "../json/Juan/experiencia.json"
//Imagenes
import noticia_imagenes from "../assets/noticias/noticia_principal.jpg"
function ExperienciaJuan(){
    return(     
        <> 
           <section className={styles.imagenExperiencia}>
                <img src={noticia_imagenes} alt="Proyecto" />
               </section>
               <section className={styles.experiencia}> 
                {experienciaJuan.map(experiencia => (
                <div className={styles.cardExperiencia} key={experienciaJuan.id} > 
                    <h2>{experiencia.cargo}</h2> 
                    <span>{experiencia.empresa}</span>
                    <p>{experiencia.projecto}</p>
                    <p>Referencia: {experiencia.referencia}</p>

                </div>   
                ))}  
         </section>
        </>
    );
}

export default ExperienciaJuan 