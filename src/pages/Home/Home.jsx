import { faCss3, faCss3Alt, faHtml5, faJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import Buttons from "../../components/buttons/Buttons";
import "./home.scss";

const Home = () => {
  return (
    <div className="containerHome">
      <div className="starting">
        <div className="iconsHome"> 
          <Link to={"/react"}>
            <FontAwesomeIcon icon={faReact} className="fa-2xl"/>
          </Link>
          <Link to={"/webDev"}>
            <FontAwesomeIcon icon={faHtml5} className="fa-2xl"/>
            <FontAwesomeIcon icon={faCss3Alt} className="fa-2xl"/>
            <FontAwesomeIcon icon={faJs} className="fa-2xl"/>
          </Link>
        </div>
        <h1>
          Este es un sitio web para que pruebes código de reactJS y de HTML - CSS y
          Javascript
        </h1>
        <p>
          No es solo para ordenadores, por que siempre y cuando tengas conexión
          a internet vas a poder realizar tu codigo sea con el movil, una tableta o el
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
