//Styles
import styles from "../modules/Pañol.module.css"
//Components
import Header from "../components/Header"
//Imagenes
import pañolLogo from "../assets/sistemas/pañolimg.png"
import icon1 from "../assets/sistemas/1.png"
import icon2 from "../assets/sistemas/2.png"
import icon3 from "../assets/sistemas/3.png"
//Escuelas Logos
import eestn5 from "../assets/logo/escuelaPañollogo.png"
import eestn1 from "../assets/logo/escuelaPañollogo1.png"
import eestn3 from "../assets/logo/escuelaPañollogo3.png"
function pañol(){
    return(
        <>
        <Header />
         <div className={styles.pañolContent}>
          <section className={styles.imagenPañol}>
             <img src={pañolLogo} alt="Logo Pañol" />
           </section>
           <section className={styles.infoPañol}>
            <p>
            <h1>System of Stock</h1>
             Pañol es un proyecto que ofrece una solución completa para la gestión de herramientas en talleres, permitiendo hacer pedidos de forma rápida y eficiente, y controlando el stock de manera efectiva. Es una herramienta muy útil para mejorar la productividad en talleres y reducir el tiempo que se dedica a la gestión de herramientas.
            </p>
            <button>Conseguir</button>
           </section>
         </div>
         <div className={styles.beneficiosPañol}>
            <article className={styles.cardPañol}>
             <img src={icon1} alt="Foto" />
              <span>Sistema de Pedidos Eficiente:</span>
             <p>
              La capacidad de realizar pedidos de herramientas de dos maneras distintas, ya sea a través de códigos de barras o manualmente, facilita y agiliza el proceso de solicitud de herramientas en el taller.
             </p> 
            </article>
            <article className={styles.cardPañol}>
             <img src={icon2} alt="Foto" />
              <span>Gestión de Stock Detallada:</span>
             <p>
              La sección de stock proporciona una visión completa del inventario de herramientas, incluyendo la cantidad total, la cantidad en uso y la disponibilidad restante. La capacidad de crear y editar herramientas mejora la gestión general del stock.
             </p> 
            </article>
            <article className={styles.cardPañol}>
             <img src={icon3} alt="Foto" />
              <span>Registro Detallado de Pedidos:</span>
             <p>
              La sección de pedidos presenta un registro detallado con información sobre el solicitante, fecha y hora del pedido, herramientas seleccionadas y la posibilidad de descargar en PDF. Esto garantiza una trazabilidad completa y simplifica la finalización del proceso.
             </p> 
            </article>
         </div>
         <section className={styles.escuelasAdd}>
           <h2>Instituciones Adheridas</h2>
          <div className={styles.instituciones}> 
            <img src={eestn5} alt="Add" />
            <img src={eestn1} alt="Add" />
            <img src={eestn3} alt="Add" />
          </div>
         </section>
         <div className={styles.vistasReales}>
            <section className={styles.ejemplo1}>
              <img src={eestn5} alt="Escuela" />
             <div className={styles.info}>
              <p>E.E.S.T.N° 5</p>
              <span>
               “Con Omnicommerce me olvidé de controlar el stock a cada rato y pude potenciar mi negocio a gran escala y con seguridad.”
              </span>
              <label>Profesor: Ruben Monje</label>
             </div>
            </section>
            <section className={styles.ejemplo2}>
            <img src={eestn1} alt="Escuela" />
            <div className={styles.info}>
            <p>E.E.S.T.N-1</p>
              <span>
              “Con Omnicommerce me olvidé de controlar el stock a cada rato y pude potenciar mi negocio a gran escala y con seguridad.”
              </span>
              <label>Profesor: Sergio Romano</label>
             </div>
            </section>
            <section className={styles.ejemplo3}>
            <img src={eestn3} alt="Escuela" />
            <div className={styles.info}>
            <p>E.E.S.T.N° 3</p>
              <span>
              “Con Omnicommerce me olvidé de controlar el stock a cada rato y pude potenciar mi negocio a gran escala y con seguridad.”
              </span>
              <label>Profesor: Carlos Acuña</label>
             </div>
            </section>
         </div>
        </>
    )
}

export default pañol