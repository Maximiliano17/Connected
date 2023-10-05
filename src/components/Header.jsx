//Styles
import styles from "../modules/Header.module.css"
//React nav
import { Link } from "react-router-dom"
import { useState } from "react"
//Modal
import Modal from "react-modal"
//Icons
import Red_icon_1 from "../assets/icons/instagram_icon.png"
import Red_icon_2 from "../assets/icons/tiwtter_icon.png"
import Red_icon_3 from "../assets/icons/youtube_icon.png"

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

function Header() {

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }
 
    return (
      <>
       <header className={styles.header}>
       <Modal
          className={styles.modal}
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

         <div className={styles.redesHeaderModal}>
            <a target="_blanck" href="https://www.instagram.com/_connected_world_/" className={styles.redesIconModal}>
              <img src={Red_icon_1} alt="Ig" />
            </a>
            <a target="_blanck" href="" className={styles.redesIconModal}>
              <img src={Red_icon_2} alt="Tw" />
            </a>
            <a target="_blanck" href="https://www.youtube.com/@mundoconectado5199" className={styles.redesIconModal}>
              <img src={Red_icon_3} alt="Yt" />
            </a>
          </div>

           <nav className={styles.nav_res}> 
            <Link to={`/Home`} className={styles.nav_item_res}>
                Home 
              </Link> 
              <Link to={`/Petzify`} className={styles.nav_item_res}>
                Eventos 
              </Link>
              <Link to={`/Sistemas`} className={styles.nav_item_res}> 
                Sistemas 
              </Link>
              <Link to={`/Taller`} className={styles.nav_item_res}>
                Pañol 
              </Link>
              <Link to={`/Petzify`} className={styles.nav_item_res}>
                Petzify 
              </Link>
              <Link to={`/Home`} className={styles.nav_item_res}>
                Codigo azul 
              </Link>
              <button className={styles.botonmodal_res} onClick={closeModal}>
                X
              </button>
            </nav> 
         </Modal>
        <section className={styles.headersup}>
          <div className={styles.tituloHeader}>
            <h1>Connected World</h1> 
          </div>
         
          <div className={styles.bottonContact}>
            <button>
              Contact
            </button>
          </div> 
        </section>
        <section className={styles.navbar}>
         <nav className={styles.nav}> 
          <Link to={`/Home`} className={styles.nav_item}>
              Home 
            </Link>  
            <Link to={`/Home`} className={styles.nav_item}>
                Eventos 
              </Link>
            <Link to={`/Sistemas`} className={styles.nav_item}> 
              Sistemas 
            </Link>
            <Link to={`/taller`} className={styles.nav_item}>
              Pañol 
            </Link>
            <Link to={`/Petzify`} className={styles.nav_item}>
              Petzify 
            </Link>
            <Link to={`/Home`} className={styles.nav_item}>
              Codigo azul 
            </Link>
        </nav> 
         <div className={styles.redesHeader}>
           <a target="_blanck" href="https://www.instagram.com/_connected_world_/" className={styles.redesIcon}>
              <img src={Red_icon_1} alt="Ig" />
            </a>
            <a target="_blanck" href="" className={styles.redesIcon}>
              <img src={Red_icon_2} alt="Tw" />
            </a>
            <a target="_blanck" href="https://www.youtube.com/@mundoconectado5199" className={styles.redesIcon}>
              <img src={Red_icon_3} alt="Yt" />
            </a>
          </div>
          <button onClick={openModal} className={styles.burger}>
           <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
          </button>
        </section>
       </header> 
      </>
    ) 
  }
  
  export default Header
