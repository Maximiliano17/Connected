//Components
import Header from "../components/Header"
import Slider from "../components/Slider"
//Styles
import styles from "../modules/Petzify.module.css"
//Imagenges
import app from "../assets/icons/app.png"
import petshop from "../assets/icons/petshop.png"
import adoptar from "../assets/icons/adoptar.png"
import perfiles from "../assets/icons/crearPerfiles.png"
import fotos from "../assets/icons/subirFoto.png"
import celular from "../assets/sistemas/petzifyimg.png"

function Petzify(){   
    return(
        <>
        <Header/>
         <div className={styles.petzifyContent}>
           <section className={styles.homePet}> 
            <img src={celular} alt="Celular" />
            <section className={styles.infoPetzify}>
                <p>
                <h1>Petzify</h1>
                Petzify es una red social especializada en animales domésticos que proporciona a los dueños de mascotas un entorno dedicado a compartir sus experiencias con sus compañeros peludos. Además, permitiremos a los usuarios publicar sobre animales disponibles para adopción y solicitar donaciones para facturas médicas de sus mascotas.
                </p>
                <button>Donwload</button>
           </section>
           </section>
         <div className={styles.caracteristicasApp}>
            <section className={styles.imagenMano}>
                <img src={app} alt="Imagen" />
            </section>
            <section className={styles.cardMano}>
                <article className={styles.cardItem}>
                <img  src={fotos} alt="Icon" />
                 <p>
                  Sube fotos de tus mascotas.
                 </p>
                </article>
                <article className={styles.cardItem}>
                <img  src={perfiles} alt="Icon" />
                 <p>
                 Crea perfiles a tus mascotas.
                 </p>
                </article>
                <article className={styles.cardItem}>
                <img  src={petshop} alt="Icon" />
                 <p>
                  Compra y vende productos animales.
                 </p>
                </article>
                <article className={styles.cardItem}>
                <img  src={adoptar} alt="Icon" />
                 <p>
                  Adopta y da en adopcion.
                 </p>
                </article>
            </section>
         </div>
       </div>
        </>
    )
}

export default Petzify