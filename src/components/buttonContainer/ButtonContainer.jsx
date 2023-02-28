import React from "react";
import ButtonsCode from "../buttonsCode/buttonsCode";

const ButtonContainer = ({ buttonsLanguages, languageChanges, saveCode }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        marginTop:"3rem",
        height: "88vh",
        justifyContent: "space-between",
      }}
    >
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
