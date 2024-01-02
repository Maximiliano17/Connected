//Components
import Header from "../components/Header"
//Styles
import styles from "../modules/Petzify.module.css"
//Imagenges
import app from "../assets/icons/app.png"
import petshop from "../assets/icons/petshop.png"
import adoptar from "../assets/icons/adoptar.png"
import perfiles from "../assets/icons/crearPerfiles.png"
import fotos from "../assets/icons/subirFoto.png"
import section from "../assets/sistemas/newSection.png"
import app1 from "../assets/sistemas/pet1.png"
import app2 from "../assets/sistemas/pet2.png"
function Petzify(){   
    return(
        <>
        <Header/>
         <div className={styles.petzifyContent}>
           <section className={styles.homePet}> 
            <img src={app1} className={styles.imagenCelular} alt="Celular" />
            <img src={app2} className={styles.imagenCelularRes}  alt="Celular" />
            <section className={styles.infoPetzify}>
              <p>
                <h1>Petzify</h1>
                 Petzify es una red social especializada en animales domésticos que proporciona a los dueños de mascotas un entorno dedicado a compartir sus experiencias con sus compañeros peludos.
              </p>
                <button>Descargar</button>
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
         {/* <div className={styles.institucionesAdd}>
           <h2>Instituciones add</h2>
           <section className={styles.instituciones}>
            <img src={eco} />
            <img src={gato} />
            <img src={dog} />
            <img src={cats} />
           </section>
         </div> */}
         <div className={styles.comunidadContent}>  
          <section className={styles.tituloComunidad}>
              <p>Nueva Seccion</p>
          </section>  
            <div className={styles.content}>
                <img className={styles.imagen} src={section} />
                <img className={styles.imagenRes} src={section} />
                <div className={styles.infoPet}>
                <span className={styles.titulo}>Buscador de usuarios.</span>
                <p>
                 ¡Novedad en nuestra app de red social! Introducimos una emocionante característica: el 'Buscador de Usuarios'. Ahora, encontrar y conectar con amigos y personas afines es más fácil que nunca. Simplemente utiliza esta función para buscar usuarios por nombre, intereses o ubicación. Amplía tu círculo social y descubre nuevas amistades con solo unos clics. ¡Es hora de conectar como nunca antes! ¡Prueba el buscador de usuarios hoy mismo y descubre quién está en nuestra comunidad!
                </p>
                  {/* <a target="_Blanck" href="https://petzify.vercel.app/">Ver mas</a> */}
              </div>
            </div>
         </div>
       </div>
        </>
    )
}

export default Petzify