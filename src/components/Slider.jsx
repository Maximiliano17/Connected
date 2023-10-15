import Carousel from '@itseasy21/react-elastic-carousel';
import styles from "../modules/Slider.module.css";
import Banner1 from "../assets/banners/banner.png";
import Banner2 from "../assets/banners/bannerHospital.png";
import BannerFull from "../assets/banners/bannerHospitalFull.png";
import BannerFull1 from "../assets/banners/bannerHospitalFull1.png";
import Banner3 from "../assets/banners/bannerHospital2.jpg";

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
  const carouselOptions = {
    showArrows: false, // Establece esto en false para ocultar las flechas
    autoPlay: true, // Activa la reproducción automática
    autoPlaySpeed: 3000, // Establece el tiempo de transición en milisegundos (3 segundos en este caso)
  };

  return (
    <>
      <Carousel
        renderArrow={() => <></>} // Puedes usar esta prop para personalizar las flechas, pero en este caso las estamos desactivando completamente
        {...carouselOptions}
      >
        {/* Contenido del carrusel */}
        <div className={styles.carrusel}>
          <img src={BannerFull} alt="hola" />
        </div>
        <div className={styles.carrusel}>
          <img src={BannerFull1} alt="hola" />
        </div>
        <div className={styles.carrusel}>
          <img src={Banner3} alt="hola" />
        </div>
        <div className={styles.carrusel}>
          <img src={Banner1} alt="hola" />
        </div>
        <div className={styles.carrusel}>
          <img src={Banner2} alt="hola" />
        </div>
      </Carousel>
    </>
  );
}

export default Slider;
