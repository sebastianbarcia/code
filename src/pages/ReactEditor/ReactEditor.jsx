import React, { useState, useEffect } from "react";
import code from "../../utils/helpers";
import "./reactStylesEditor.scss";
import { ButtonContainer, ComponentEditorReact } from "../../components";

const ReactEditor = () => {
  
  const guardar = () => {
    console.log("guardar codigo");
  };

  const scope = {
    React,
    useState,
    useEffect,
  };

  return (
    <>
      <div className="reactEditorContainer">
        <ButtonContainer saveCode={guardar} text={"Guardar"} />
        <ComponentEditorReact code={code} scope={scope} />
      </div>
    </>
  );
};

export default ReactEditor;
