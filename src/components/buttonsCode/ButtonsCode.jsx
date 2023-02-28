import React from "react";

const ButtonsCode = ({ buttonsLanguages, languageChanges }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        paddingLeft: 2,
        paddingRight: 2,
        gap: 10,
      }}
    >
      {buttonsLanguages.map((item) => {
        return <button onClick={languageChanges}>{item.title}</button>;
      })}
    </div>
  );
};

export default ButtonsCode;
