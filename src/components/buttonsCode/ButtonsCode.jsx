import React from "react";
import '../buttonsCode/buttonsCode.scss'

const ButtonsCode = ({ buttonsLanguages, languageChanges }) => {
  return (
    <div className="buttonsCodeStyles" >
      {buttonsLanguages.map((item) => {
        return <button onClick={languageChanges} key={item.id}>{item.title}</button>;
      })}
    </div>
  );
};

export default ButtonsCode;
