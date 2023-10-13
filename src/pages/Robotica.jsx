//Components
import Header from "../components/Header"
//Styles
import styles from "../modules/Robotica.module.css"
//Imagenes
import robotEvent from "../assets/robotica/hechoRobotica.jpeg"
import robotPetzify from "../assets/robotica/petzifyRobot.jpeg"
import construccion from "../assets/robotica/construccion.jpeg"
import competencia from "../assets/robotica/competencia.png"
function Robotica(){
   return(
    <>
     <Header /> 
     <div className={styles.roboticaConten}>
       <div className={styles.robotHme}>
         <section className={styles.imagenRobot}>
             <img src={robotEvent} alt="Logo Pañol" />
           </section>
           <section className={styles.infoRobot}>
            <p>
            <h1>Robotica</h1>
            En Connected, nos destacamos en tecnología e innovación, demostrándolo con nuestra participación activa en eventos de robótica. Formamos parte esencial de la comunidad robótica, explorando, aprendiendo y contribuyendo al apasionante mundo de la automatización e inteligencia artificial.
            </p>
            <button>Conseguir</button>
           </section> 
       </div>
       <section className={styles.robotPetzify}>
        <div className={styles.infoPetzify}>
         <article className={styles.cardPet}>
          <img src={robotPetzify} alt="Logo Pañol" />
          <h2>Diseño</h2>
           <p>
            Contamos con unos diseños de gran calidad mostrando igual esfuerso en que el robot sea completamente optumo en su funcionamiento, como que lo sea a nivel estietico.
           </p>
         </article>
         <article className={styles.cardPet}>
          <img src={construccion} alt="Logo Pañol" />
          <h2>Construccion</h2>
           <p>
            Contamos con unos diseños de gran calidad mostrando igual esfuerso en que el robot sea completamente optumo en su funcionamiento, como que lo sea a nivel estietico.
           </p>
         </article>
         <article className={styles.cardPet}>
          <img src={competencia} alt="Logo Pañol" />
          <h2>Competencias</h2>
           <p>
            Contamos con unos diseños de gran calidad mostrando igual esfuerso en que el robot sea completamente optumo en su funcionamiento, como que lo sea a nivel estietico.
           </p>
         </article>
        </div>
       </section>
     </div> 
    </>
   )
}

export default Robotica;