//Styles
import styles from "../modules/Pañol.module.css"
//Components
import Header from "../components/Header"
//Imagenes
import pañolLogo from "../assets/sistemas/pañolImg.png"
import icon1 from "../assets/sistemas/1.png"
import icon2 from "../assets/sistemas/2.png"
import icon3 from "../assets/sistemas/3.png"
import pañolVista from "../assets/sistemas/pañolVista.png"
import pañolBuscador from "../assets/sistemas/pañolBuscador.png"
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
                "El equipo de trabajo demostró gran responsabilidad y compromiso en la implementación del mismo, con sus exposiciones en distintas instancias solicitadas, que también se vieron en los ajustes recurrentes a cualquier crítica o revisión del sistema con notable dinamismo y actitud proactiva para lograr un desarrollo óptimo y ágil de toda la propuesta."
              </span>
              <label>Profesor: Ruben Monje</label>
             </div>
            </section>
            <section className={styles.ejemplo2}>
            <img src={eestn1} alt="Escuela" />
            <div className={styles.info}>
            <p>E.E.S.T.N° 1</p>
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
                "Las necesidades emergentes en cuanto a los manejos de grandes cantidades de información de manera organizada con la utilización de bases de datos adaptables, no solo se centran en el pañol sino también se deben extender a otros lugares de la institución, como la biblioteca, secretaría, jefatura de taller, preceptorías, etc."
              </span>
              <label>Profesor: Carlos Acuña</label>
             </div>
            </section> 
         </div>
         <div className={styles.contentAt}>
         <section className={styles.actualizacion}>
            <section className={styles.tituloComunidad}> 
                  <p>Nueva Seccion</p>
              </section>  
              <div className={styles.contentAt}>
                    <img className={styles.imagen} src={pañolBuscador} />
                    <img className={styles.imagenRes} src={pañolBuscador} />
                    <div className={styles.infoPet}>
                    <span className={styles.titulo}>Buscador de Herramientas.</span>
                    <p>
                     Se ah incorporado una característica muy útil: un buscador dentro del stock. Esto permite a los usuarios encontrar herramientas de manera más rápida y sencilla. En lugar de buscar manualmente entre las herramientas disponibles, los usuarios pueden simplemente ingresar palabras clave o descripciones en el buscador.
                    </p>
                      <a target="_Blanck" href="https://petzify.vercel.app/">Ver mas</a>
              </div>
          </div>
         </section>
         </div>
        </>
    )
}

export default pañol