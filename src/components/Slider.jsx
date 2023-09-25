//Imports
import Carousel from '@itseasy21/react-elastic-carousel';
//Styles
import styles from "../modules/Slider.module.css";
//Imagenes
import Noticia from "../assets/noticias/noticia_principal.jpg"

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
                 <img src={Noticia} alt="hola" />
            </div>
            <div className={styles.carrusel}>
                 <img src={Noticia} alt="hola" />
            </div>
            <div className={styles.carrusel}>
                 <img src={Noticia} alt="hola" />
            </div>
            <div className={styles.carrusel}>
                 <img src={Noticia} alt="hola" />
            </div>
            <div className={styles.carrusel}>
                 <img src={Noticia} alt="hola" />
            </div>
          </Carousel>
    </>
    );
}

export default Slider;