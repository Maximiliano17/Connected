//Imports
import Carousel from '@itseasy21/react-elastic-carousel';
//Styles
import styles from "../modules/Slider.module.css";
//Imagenes
import Noticia from "../assets/noticias/noticia_principal.jpg"
import Banner1 from "../assets/banners/banner.png"
import Banner2 from "../assets/banners/bannerHospital.png"
import BannerFull from "../assets/banners/bannerHospitalFull.png"
import BannerFull1 from "../assets/banners/bannerHospitalFull1.png"
import Banner3 from "../assets/banners/bannerHospital2.jpg"
import Banner4 from "../assets/banners/bannerHospital3.jpg"
function Slider(){
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        } 
      };
    return( 
    <>
       <Carousel >
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