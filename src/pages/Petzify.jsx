//Components
import Header from "../components/Header"
//Styles
import styles from "../modules/Petzify.module.css"
//Imagenges
import logoapp from "../assets/noticias/noticia_principal.jpg"
import app from "../assets/icons/app.png"
import petshop from "../assets/icons/petshop.png"
import adoptar from "../assets/icons/adoptar.png"
import perfiles from "../assets/icons/crearPerfiles.png"
import fotos from "../assets/icons/subirFoto.png"
//Banners
import banner from "../assets/banners/banner.png"
//React
import React from 'react'
import ReactPlayer from 'react-player'

function Petzify(){
    return(
        <>
        <Header/>
         <div className={styles.petzifyContent}>
           <section className={styles.homePet}> 
             <div className={styles.infoDownload}>
                <h1>¿Todavía no tenés la APP de Petzify?</h1>
                <p>Descargatela y entra en la comunidad mas grande de cuidado animal en latinoamerica.</p>
                <label>Bajala ahora desde acá 👇🏻</label>
                <div className={styles.botonesDonwload}>
                  <button>
                    Donwload Android
                  </button> 
                  <button>
                    Donwload Apple 
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
         <div className={styles.sobrelaApp}>
          <div className={styles.infoApp}>
              <ReactPlayer className={styles.videoYoutube} controls url='https://youtu.be/sd4FjQaW0-4?si=MOEje6zo13epZcAs' />
            {/*
               <div className={styles.listVideo}>
                <ul>
                  <li><a href="" target="_blanck"><img src={Red_icon_1} alt="Ig"/></a></li>
                  <li><a href="" target="_blanck"><img src={Red_icon_2} alt="Ig"/></a></li>
                  <li><a href="" target="_blanck"><img src={Red_icon_3} alt="Ig"/></a></li>
                </ul>
              </div>
            */}
          </div>
          <section className={styles.bannerApp}>
            <img src={banner} alt="Banner" />
          </section>
         </div>
        </>
    )
}

export default Petzify