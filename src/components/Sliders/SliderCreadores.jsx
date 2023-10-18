//Horacio Fotos
import horacio from "../../assets/robotica/horacio.jpeg"
import hechohoracio from "../../assets/robotica/hechoRobotica.jpeg"
import mamani from "../../assets/robotica/mamani.jpeg"
import mamaniEvent from "../../assets/robotica/mamanievent.jpeg"
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
        <div className={styles.carruselCreadores}>
          <img src={horacio} alt="hola" />
        </div>
        <div className={styles.carruselCreadores}>
          <img src={hechohoracio} alt="hola" />
        </div>
        <div className={styles.carruselCreadores}>
          <img src={mamani} alt="hola" />
        </div>
        <div className={styles.carruselCreadores}>
          <img src={mamaniEvent} alt="hola" />
        </div>
      </Carousel>
    </>
  );
}

export default Slider;
