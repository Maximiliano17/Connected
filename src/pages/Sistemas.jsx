//Components
import Header from "../components/Header"
//Styles
import  styles from "../modules/Sistemas.module.css"
//Imagenes

function Sistemas() {
    return ( 
      <> 
      <Header />
       <div className={styles.sistemasContent}> 
          <div className={styles.imagenhome}>
            <article className={styles.cardSistemas}>
               <h1>Sistemas</h1>  
               <div className={styles.content}>
                <p>En Connected World, ofrecemos sistemas pre creados para cubrir diversas necesidades empresariales. Listos para implementarse de inmediato, son ideales para empresas que buscan soluciones eficientes y probadas. Desde gestión empresarial hasta plataformas de comercio electrónico, nuestra colección abarca diversas áreas, proporcionando acceso rápido a soluciones tecnológicas de vanguardia. Simplificamos la adopción tecnológica, permitiendo a las empresas optimizar operaciones y mejorar rendimiento con soluciones confiables.</p>
               </div>
            </article> 
            <article className={styles.cardSistemas}>
               <h1>Sistemas Personalizados</h1>  
               <div className={styles.content}>
                <p>
                En Connected World, entendemos que cada empresa es única. Ofrecemos servicios de desarrollo de sistemas personalizados que se adaptan perfectamente a los requerimientos individuales. Colaboramos estrechamente para comprender procesos comerciales, desafíos y metas, creando soluciones a medida que reflejan su visión única. Desde gestión interna hasta aplicaciones móviles personalizadas, nuestro equipo trabaja para llevar a la realidad las ideas y objetivos específicos. Con Connected World, la personalización va más allá de la adaptación; es la creación de soluciones tecnológicas que potencian el éxito empresarial de manera exclusiva.
                </p>
               </div>
            </article> 
          </div>
       </div> 
       {/*
         <PagDis />
       */}
      </>
    ) 
  }
  
  export default Sistemas
  