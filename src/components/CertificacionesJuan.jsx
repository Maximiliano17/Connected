//Styles
import styles from "../modules/Certificaciones.module.css"
//Json
import certificadoJuan from "../json/Juan/certificados.json"

function CertificacionesJuan(){
    return(    
        <>
        <div className={styles.certificaciones}>  
         <h1>Educacion</h1>   
          <div className={styles.certificado}>  
                {certificadoJuan.map(certificado => (
                <div className={styles.cardCertificado} key={certificado.id} > 
                    <h2>{certificado.certificación_obtenida}</h2> 
                    <span>Empresa: {certificado.empresa}</span>
                    <p>Fecha de obtención: {certificado.fecha_de_obtención}</p>
                    <button>Ver</button>
                </div>   
                ))}
          </div>
        </div>  
        </>
    );
}

export default CertificacionesJuan 