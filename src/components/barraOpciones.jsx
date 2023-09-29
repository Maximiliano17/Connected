//Styles
import styles from "../modules/barraOp.module.css"
//Imagenes
import img from "../assets/icons/html.png"
function BarOptions(){
    return(
        <>
         <div className={styles.barraOp}> 
          <section className={styles.servicios}>
            <article className={styles.serviciosCard}>
               <p>Pages Web</p>
                <img src={img} alt="Foto" />
                <ul className={styles.listaServ}>
                    <li>Dominio</li>
                    <li>Hosting</li>
                    <li>Responcive Desing</li>
                    <li>Database</li> 
                    <li>Apk</li>
                </ul>
            </article>
            <article className={styles.serviciosCard}>
               <p>App Web</p>
                <img src={img} alt="Foto" />
                <ul className={styles.listaServ}>
                    <li>Dominio</li>
                    <li>Hosting</li>
                    <li>Responcive Desing</li>
                    <li>Database</li>
                    <li>Apk</li>
                </ul>        
            </article>
            <article className={styles.serviciosCard}>
               <p>App Mobile</p>
                <img src={img} alt="Foto" />
                <ul className={styles.listaServ}>
                    <li>Dominio</li>
                    <li>Hosting</li>
                    <li>Responcive Desing</li>
                    <li>Database</li>
                    <li>Apk</li>
                </ul>
            </article>
          </section>
         </div>
        </>
    )
 }

export default BarOptions;