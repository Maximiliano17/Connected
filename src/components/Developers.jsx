//Styles
import styles from "../modules/Developers.module.css"
//Imagenes
import noticia_imagenes from "../assets/noticias/noticia_principal.jpg"
import perfilMaxi from "../assets/img/fotoPerfil.jpeg"
import sobreMiMaxi from "../assets/img/sobreMiMaxi.jpeg"
import sobreMiMaxi2 from "../assets/img/sobreMiMaxi2.jpeg"
import sobreMiMaxi3 from "../assets/img/sobreMiMaxi3.jpeg"
import sobreMiMaxi4 from "../assets/img/sobreMiMaxi4.jpeg"
import perfilJuan from "../assets/img/juan.jpg"
import html from "../assets/icons/html.png"
import css from "../assets/icons/css-3.png"
import js from "../assets/icons/js.png"
import react from "../assets/icons/React.svg.png"
import node from "../assets/icons/node.png"
import php from "../assets/icons/php.png"
import mysql from "../assets/icons/mysql.png"
import typescript from "../assets/icons/typescript.png"
import docker from "../assets/icons/docker.png"
//Modal
import Modal from "react-modal"
//React
import { useState } from "react" 
//Components
import Certificaciones from "../components/Certificaciones"
const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

function Developers(){
    //Modal Experiencia
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {}
  
    function closeModal() {
      setIsOpen(false);
    }

    //Modal Proyectos
    const [modalIsOpen2, setIsOpen2] = useState(false);

    function openModal2() {
      setIsOpen2(true);
    }
  
    function afterOpenModal2() {}
  
    function closeModal2() {
      setIsOpen2(false);
    }

    //Modal Certificado
    const [modalIsOpen3, setIsOpen3] = useState(false);

    function openModal3() {
      setIsOpen3(true);
    }
  
    function afterOpenModal3() {}
  
    function closeModal3() {
      setIsOpen3(false);
    }


    return(
        <>
        <h2 className={styles.tituloDev}>Developers</h2>
         <div className={styles.developers}>   
            <section className={styles.dev}>
                <div className={styles.cardDev}>
                  <div className={styles.fotoDev}>
                    <img src={perfilMaxi} alt="Foto Perfil" />
                  </div>  
                  <div className={styles.redesDev}>
                        <p>
                          Dos Santos Maximiliano
                        </p>
                    <a target="_blanck" href="https://github.com/Maximiliano17">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                     <label>
                      Linkedin
                     </label>
                    </a> 
                    <a target="_blanck" href="https://www.linkedin.com/in/maximilianodossantos/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                     <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                     <label>
                      Git Hub
                     </label>
                    </a>
                    <a target="_blanck" href="https://github.com/Maximiliano17">
                       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-file-earmark-person-fill" viewBox="0 0 16 16">
                         <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755z"/>
                       </svg>
                      <label>
                       Curriculum
                      </label>
                    </a>
                  </div>
                </div>
                <div className={styles.dataDev}>
                 {/*Modal Certificado*/} 
                <Modal
                    className={styles.modal}
                    isOpen={modalIsOpen3}
                    onAfterOpen={afterOpenModal3}
                    onRequestClose={closeModal3}
                    style={customStyles}
                    contentLabel="Example Modal"
                    >

                  <div className={styles.barraSup}>
                      <p>
                        - Certificaciones -
                      </p>
                      <button onClick={closeModal3}>
                        X
                      </button>
                   </div>
                   <div className={styles.contenidoModal3}>
                    <Certificaciones />
                   </div>
                 </Modal>
                {/*Modal Sobre Mi*/} 
                <Modal
                    className={styles.modal}
                    isOpen={modalIsOpen2}
                    onAfterOpen={afterOpenModal2}
                    onRequestClose={closeModal2}
                    style={customStyles}
                    contentLabel="Example Modal"
                    >
                   <div className={styles.barraSup}>
                      <p>
                        - Sobre Mi -
                      </p>
                      <button onClick={closeModal2}>
                        X
                      </button>
                   </div> 
                   <div className={styles.contenidoModal2}>
                     <section className={styles.imagenesProyecto}>
                      <article className={styles.imagen}>
                        <img src={perfilMaxi} alt="Foto Sobre Mi" />
                      </article>
                      <article className={styles.imagen}>
                       <img src={sobreMiMaxi} alt="Foto Sobre Mi" />
                      </article>
                      <article className={styles.imagen}>
                       <img src={sobreMiMaxi2} alt="Foto Sobre Mi" />
                      </article>
                      <article className={styles.imagen}>
                       <img src={sobreMiMaxi3} alt="Foto Sobre Mi" />
                      </article>
                      <article className={styles.imagen}>
                       <img src={sobreMiMaxi4} alt="Foto Sobre Mi" />
                      </article>
                     </section>
                     <section className={styles.infoProyecto}>
                       <h2>Dos santos Maximiliano</h2>
                       <span>Desarrollador Full-Stack</span>
                       <p>Desarrollador web enfocado en el área del Front end, desde siempre he buscado mejorar mi capacidad tanto de programación como de trabajo. Apasionado de nuevas oportunidades disfruto de trabajar solo y en grupo si lo amerita la situación.</p>
                     <section className={styles.stack}>
                       <article className={styles.articulo}>
                         <img src={html} alt="Html" />
                         <label className={styles.stacklabel}>Html 5</label>
                       </article>
                       <article className={styles.articulo}>
                         <img src={css} alt="Html" />
                         <label className={styles.stacklabel}>Css 3</label>
                       </article>
                       <article className={styles.articulo}>
                         <img src={js} alt="Html" />
                         <label className={styles.stacklabel}>JavaScript</label>
                       </article>
                       <article className={styles.articulo}>
                         <img src={react} alt="Html" />
                         <label className={styles.stacklabel}>React.Js</label>
                       </article>
                       {
                        /*
                         <article className={styles.articulo}>
                         <img src={react} alt="Html" />
                         <label className={styles.stacklabel}>React Native</label>
                       </article>
                       */
                       }
                       <article className={styles.articulo}>
                         <img src={node} alt="Html" />
                         <label className={styles.stacklabel}>Node.Js</label>
                       </article>
                       <article className={styles.articulo}>
                         <img src={php} alt="Html" />
                         <label className={styles.stacklabel}>Php</label>
                       </article>
                       <article className={styles.articulo}>
                         <img src={mysql} alt="Html" />
                         <label className={styles.stacklabel}>Mysql</label>
                       </article>
                       <article className={styles.articulo}>
                         <img src={typescript} alt="Html" />
                         <label className={styles.stacklabel}>TypeScript</label>
                       </article>
                       <article className={styles.articulo}>
                         <img src={docker} alt="Html" />
                         <label className={styles.stacklabel}>Docker</label>
                       </article>
                     </section>
                     </section>
                   </div>
                 </Modal>     
                 {/*Modal Experiencia*/} 
                <Modal
                    className={styles.modal}
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    >
              <div className={styles.barraSup}>
              <p>
                - Experiencia -
              </p>
              <button onClick={closeModal}>
                X
              </button>
              </div> 
              <div className={styles.contenidoModal}>

               <section className={styles.imagenExperiencia}>
                <img src={noticia_imagenes} alt="Proyecto" />
               </section>
               <section className={styles.experiencia}>
                <article className={styles.cardExperiencia}>
                  <p>Programador Front End</p>
                  <p>Escuela De Educación Secundaria Técnica N°5 Merlo Libertad</p>
                  <h2>Desarrollo de software controlador de stock.</h2>
                  <span>Referencia: Jefe de la especialidad informática  Walter Carnero 11-6099-4485</span>
                </article>
                <article className={styles.cardExperiencia}>
                  <p>Programador Full Stack</p>
                  <p>Escuela De Educación Secundaria Técnica N°5 Merlo Libertad</p>
                  <h2>Desarrollo de página institucional.</h2>
                  <span>Referencia: Jefe de la especialidad informática  Walter Carnero 11-6099-4485</span>
                </article>
                <article className={styles.cardExperiencia}>
                  <p>Programador Front End</p>
                  <p>Empresa de instalaciones eléctricas</p>
                  <h2>Desarrollo de página informativa. </h2>
                  <span>Referencia: Jefe de la especialidad informática  Walter Carnero 11-6099-4485</span>
                </article>
               </section>
              </div>
              
                </Modal>  
                    <button onClick={openModal} className={styles.carInfo}> 
                     Experiencia 
                    </button>
                    <button  onClick={openModal2} className={styles.carInfo}>
                     Sobre Mi
                    </button>
                    <button onClick={openModal3}  className={styles.carInfo}>
                     Certificaciones
                    </button>
                </div>
                
            </section>
            <section className={styles.dev}>
                <div className={styles.cardDev}>
                  <div className={styles.fotoDev}>
                    <img src={perfilJuan} alt="Foto Perfil" />
                  </div>  
                  <div className={styles.redesDev}>
                        <p>
                          Villalba Juan Pablo
                        </p>
                    <a target="_blanck" href="https://www.linkedin.com/in/juanpablovillalba/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                     <label>
                      Linkedin
                     </label>
                    </a> 
                    <a target="_blanck" href="https://github.com/JuampaVLB">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                     <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                    </svg>
                     <label>
                      Git Hub
                     </label>
                    </a>
                    <a target="_blanck" href="https://portfolio-juanpablo.vercel.app/">
                       <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-file-earmark-person-fill" viewBox="0 0 16 16">
                         <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755z"/>
                       </svg>
                      <label>
                       Portafolio
                      </label>
                    </a>
                  </div>
                </div>
                <div className={styles.dataDev}>
                    <button className={styles.carInfo}> 
                     Experiencia 
                    </button>
                    <button className={styles.carInfo}>
                     Projectos
                    </button>
                    <button className={styles.carInfo}>
                     Certificaciones
                    </button>
                </div>
                
            </section>
         </div>  
        </>
    );
}   

export default Developers
