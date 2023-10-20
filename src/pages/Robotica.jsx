//Components
import Header from "../components/Header"
import Slider from "../components/Sliders/SliderRobotica" 
import SliderCreadores from "../components/Sliders/SliderCreadores" 
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
       <div className={styles.robotsAfiliados}>
         <h2>Robots Adheridos</h2>
         <section className={styles.contentRobots}>
          <div className={styles.sliderHoracio}>
           <Slider />
          </div>
          <div className={styles.infoBot}>
            <span>Horacio</span>
            <p>
             Horacio, nuestro excepcional robot, lleva con orgullo en su carcaza los logos representativos de nuestros proyectos más destacados. Ha participado con éxito en diversas competiciones, demostrando su nivel excepcional de habilidad y rendimiento. Horacio es más que una máquina; es un testimonio tangible de los logros sobresalientes que hemos alcanzado en el campo de la robótica.
            </p>
          </div>
         </section>
         <section className={styles.contentRobots}>
         <div className={styles.infoBot}>
            <span>Creadores</span>
            <p>
            Horacio, nuestro excepcional robot, lleva con orgullo en su carcaza los logos representativos de nuestros proyectos más destacados. Ha participado con éxito en diversas competiciones, demostrando su nivel excepcional de habilidad y rendimiento. Horacio es más que una máquina; es un testimonio tangible de los logros sobresalientes que hemos alcanzado en el campo de la robótica.
            </p>
         </div>
         <div className={styles.sliderCreadores}>
           <SliderCreadores />
          </div>
         </section>
       </div>
     </div> 
    </>
   )
}

export default Robotica;