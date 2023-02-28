import React from "react";
import Buttons from "../buttons/Buttons";
import ButtonsCode from "../buttonsCode/buttonsCode";
import "./buttonContainer.scss";

const ButtonContainer = ({ buttonsLanguages, languageChanges, saveCode }) => {
  return (
    <div className="buttonContainerStyles">
      {/*buttons codigo*/}
      <ButtonsCode
        buttonsLanguages={buttonsLanguages}
        languageChanges={languageChanges}
      />
      <Buttons click={saveCode} text={"Guardar"}></Buttons>
    </div>
  );
};

export default ButtonContainer;
