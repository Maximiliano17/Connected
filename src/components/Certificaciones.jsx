//Styles
import styles from "../modules/Certificaciones.module.css"

function Certificaciones(){
    return(  
        <>
        <div className={styles.certificaciones}> 
         <h1>Educacion</h1>   
         <section className={styles.certificado}>
         <article className={styles.cardCertificado}>
            <h2>Feria regional de educacion arte ,ciencia y tecnologia</h2>
            <span>Representaria a la region 8 en la instancia provincial.</span>
            <button>Ver</button>
          </article>
          <article className={styles.cardCertificado}>
            <h2>Técnico en informática personal y profesional</h2>
            <p>Escuela De Educación Secundaria Técnica  N°5 Merlo Libertad</p>
            <span>Cursando: el último año.</span>
            <button>Ver</button>
          </article>
          <article className={styles.cardCertificado}>
            <h2>Certificación  obtenida: Diploma del curso HTML5 y CSS3</h2>
            <p>Empresa: OpenBootcamp.</p>
            <span>Fecha de obtención: 22/12/2022.</span>
            <button>Ver</button>
          </article>
          <article className={styles.cardCertificado}>
            <h2>Certificación  obtenida:Introducción a la programación</h2>
            <p>Empresa: OpenBootcamp.</p>
            <span>Fecha de obtención: 22/3/2023. </span>
            <button>Ver</button>
          </article>
          <article className={styles.cardCertificado}>
            <h2>Certificación  obtenida: SQL</h2>
            <p>Empresa: OpenBootcamp.</p>
            <span>Fecha de obtención: 27/3/2023.</span>
            <button>Ver</button>
          </article>
         </section>
        </div>
        </>
    );
}

export default Certificaciones 