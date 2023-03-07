import React from "react";
import Buttons from "../buttons/Buttons";
import ButtonsCode from "../buttonsCode/buttonsCode";
import "./buttonContainer.scss";
import { useLocation } from "react-router-dom";

const ButtonContainer = ({ buttonsLanguages, languageChanges, saveCode }) => {
  let location = useLocation();

  return (
    <div className="buttonContainerStyles">
      {location.pathname === "/webDev" && (
        <ButtonsCode
          buttonsLanguages={buttonsLanguages}
          languageChanges={languageChanges}
        />
      )}
      <Buttons click={saveCode} text={"Guardar"}></Buttons>
    </div>
  );
};

export default ButtonContainer;
