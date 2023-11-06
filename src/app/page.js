import styles from './page.module.css';
import estilos from './page.bloques.css';
import React from "react";

export default function Home() {
  return (
      <main className={styles.main}>
        <div className={styles.grid}>
          <Juegos/>
        </div>
        
      </main>
  )
}

export function Juegos(identificador){
  let nombre=['Minecraft', 'Valheim', 'Satisfactory', 'SCUM?' ];
  
  nombre.forEach((valor, indice) => {
    console.log(indice)
  });
  return(
    <>

    
    <div name="{}" className="estilos.main-container">
      <h3>
        {nombre}
        {console.log(nombre)}
      </h3>
      <img src='/imagenes/iniciar.png'/>
      <img src='/imagenes/reiniciar.png'/>
      <img src='/imagenes/detener.png'/>
    </div>
    </>
  )
} 