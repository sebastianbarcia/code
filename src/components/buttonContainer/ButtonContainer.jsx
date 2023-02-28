import React from "react";
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
      <button onClick={saveCode}>Guardar</button>
    </div>
  );
};

export default ButtonContainer;
