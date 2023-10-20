//Components
import Header from "../components/Header"
//Styles
import  styles from "../modules/CodBlue.module.css"
//Imagenes
import compuSis from "../assets/sistemas/codBlue.png"
import crearAreas from "../assets/sistemas/Crear Areas.jpeg"
import asignarPersonal from "../assets/sistemas/Asignar Personal.jpeg"
import asignarPacientes from "../assets/sistemas/Editar Areas.jpeg"
function CodBlue() {
    return ( 
      <>  
      <Header /> 
      <div className={styles.codBlueHome}>
      <div className={styles.secciones}>
        <section className={styles.fotoCard}>
            <img src={compuSis} alt="Compu" /> 
         </section>
         <section className={styles.infoSec}>
         <p>
            <h1>System Medical</h1>
             Una solución digital para el protocolo médico conocido como "Código Azul", que se caracteriza por activar dos alarmas que requieren la presencia de personal médico. Esta solución debe permitir el acceso mediante un sistema de autenticación basado en usuario y contraseña, ofreciendo una serie de funcionalidades clave.
            </p>
            <button>Conseguir</button>
         </section> 
       </div>
        <section className={styles.ventajas}>
         <article className={styles.cardVentajas}>
          <img src={crearAreas} alt="Imagen" />
          <span>Creación de Áreas Médicas</span>
          <p>
            La aplicación permite la creación de áreas médicas, lo que implica configurar espacios específicos para el manejo de situaciones médicas críticas. Este punto destaca la capacidad del sistema para adaptarse a la estructura física de un entorno médico y gestionar áreas dedicadas a situaciones urgentes.
          </p> 
         </article>   
         <article className={styles.cardVentajas}>
          <img src={asignarPersonal} alt="Imagen" />
          <span>Asignación de Personal</span>
          <p>
            La solución facilita la asignación y gestión del personal médico a las áreas correspondientes. Garantiza una adecuada distribución de recursos humanos, asegurando que el personal esté asignado eficientemente según las necesidades y ubicaciones específicas de las áreas médicas.
          </p>
         </article>   
         <article className={styles.cardVentajas}>
          <img src={asignarPacientes} alt="Imagen" />
          <span>Asignación de Pacientes</span>
          <p>
            La aplicación simplifica la asignación de pacientes a las áreas médicas, asegurando una atención eficiente y oportuna. Este punto resalta la importancia de una gestión efectiva de pacientes en situaciones médicas críticas, mejorando la capacidad de respuesta del personal médico.
          </p>
         </article>   
         </section>
      </div>
      </>
    ) 
}

export default CodBlue;