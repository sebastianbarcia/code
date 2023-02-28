import React from "react";
import Buttons from "../buttons/Buttons";
import '../buttonsCode/buttonsCode.scss'

const ButtonsCode = ({ buttonsLanguages, languageChanges }) => {
  return (
    <div className="buttonsCodeStyles" >
      {buttonsLanguages.map((item) => {
        return <Buttons click={languageChanges} text={item.title} key={item.id}></Buttons>;
      })}
    </div>
  );
};

export default ButtonsCode;
