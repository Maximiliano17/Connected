//Components
import Header from "../components/Header"
//Styles
import styles from "../modules/Petzify.module.css"
//Imagenges
import logoapp from "../assets/noticias/noticia_principal.jpg"
import appmano from "../assets/logo/Mano_con_celular.webp"
import icon from "../assets/icons/css-3.png"
function Petzify(){
    return(
        <>
        <Header/>
         <div className={styles.petzifyContent}>
           <section className={styles.homePet}> 
             <div className={styles.infoDownload}>
                <h1>¿Todavía no tenés la APP de Compre Ahora?</h1>
                <p>Descargala gratis y potenciá tu negocio desde tu celular, ahorrando tiempo, presupuesto ¡y mucho más!</p>
                <label>Bajala ahora desde acá 👇🏻</label>
                <div className={styles.botonesDonwload}>
                  <button>
                    
                  </button> 
                  <button>
                    
                 </button>  
                </div>
             </div>
             <div className={styles.infoImagen}>
               <img src={logoapp} className={styles.imsg} />
             </div>
           </section>
         </div>
         <div className={styles.caracteristicasApp}>
            <section className={styles.imagenMano}>
                <img src={appmano} alt="Imagen" />
            </section>
            <section className={styles.cardMano}>
                <article className={styles.cardItem}>
                <img  src={icon} alt="Icon" />
                 <p>
                    Stockeá tus góndolas mientras las vas recorriendo
                 </p>
                </article>
                <article className={styles.cardItem}>
                <img  src={icon} alt="Icon" />
                 <p>
                    Stockeá tus góndolas mientras las vas recorriendo
                 </p>
                </article>
                <article className={styles.cardItem}>
                <img  src={icon} alt="Icon" />
                 <p>
                    Stockeá tus góndolas mientras las vas recorriendo
                 </p>
                </article>
                <article className={styles.cardItem}>
                <img  src={icon} alt="Icon" />
                 <p>
                    Stockeá tus góndolas mientras las vas recorriendo
                 </p>
                </article>
            </section>
         </div>
         <div className={styles.sobrelaApp}>
            Hola
         </div>
        </>
    )
}

export default Petzify