import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Buttons from "../../components/buttons/Buttons";
import "./home.scss";

const Home = () => {
  return (
    <div className="containerHome">
      <div className="starting">
        <div> 
        </div>
        <h1>
          Este es un sitio web para que codees en reactJS y en HTML - CSS y
          Javascript
        </h1>
        <p>
          No es solo para ordenadores, por que siempre y cuando tengas conexión
          a internet vas a poder codear sea con el movil, una tableta o el
          ordenador!
        </p>
        <p>Prueba tu codigo!</p>
      </div>
      <div className="user">
        <h2>Si ya haz hecho un codigo en esta web y lo haz guardado</h2>
        <Buttons text={"Descargar código"} click={""}></Buttons>
      </div>
    </div>
  );
};

export default Home;
