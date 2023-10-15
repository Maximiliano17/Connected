//Horacio Fotos
import Horacio1 from "../../assets/robotica/competencia.png"
import Horacio2 from "../../assets/robotica/horacioBot.jpeg"
//Carrusel
import Carousel from '@itseasy21/react-elastic-carousel';
//Styles
import styles from "../../modules/Slider/SliderRobotica.module.css"
function Slider() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  // Opciones de configuración para el Carousel
 
  return (
    <>
      <Carousel
       
      >
        {/* Contenido del carrusel */}
        <div className={styles.carrusel}>
          <img src={Horacio1} alt="hola" />
        </div>
        <div className={styles.carrusel}>
          <img src={Horacio2} alt="hola" />
        </div>
        <div className={styles.carrusel}>
          <img src={Horacio1} alt="hola" />
        </div>
        <div className={styles.carrusel}>
          <img src={Horacio2} alt="hola" />
        </div>
        <div className={styles.carrusel}>
          <img src={Horacio1} alt="hola" />
        </div>
      </Carousel>
    </>
  );
}

export default Slider;
