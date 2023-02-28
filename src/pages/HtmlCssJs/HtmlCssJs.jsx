import React, { useState, useEffect } from "react";

import { faJs, faCss3Alt, faHtml5 } from "@fortawesome/free-brands-svg-icons";

//components
import { EditorJS, Iframe, ButtonContainer } from "../../components/index";

const EditJs = () => {
  const [createHtml, setCreateHtml] = useState(
    `<h1>Escribe codigo html, dale funciones con JS o estilos con CSS</h1>`
  );
  const [html, setHtml] = useState("<!--html-->");
  const [js, setJs] = useState("//js");
  const [css, setCss] = useState("/*css*/");
  const [press, setPress] = useState(false);

  const [languageShow, setLanguageShow] = useState("HTML");

  const tools = [
    { id: 1, title: "html", value: html, icon: faHtml5 },
    { id: 2, title: "javascript", value: js, icon: faJs },
    { id: 3, title: "css", value: css, icon: faCss3Alt },
  ];

  const buttonsLanguages = [
    { id: 1, title: "HTML" },
    { id: 2, title: "CSS" },
    { id: 3, title: "Javascript" },
  ];

  useEffect(() => {
    if (press === true) {
      setCreateHtml(
        `<!DOCTYPE html>
    <html lang="en">
      <head>
        <style>
       ${css}
        </style>
      </head>
     <body>
     ${html}
        <script>
          ${js}
        </script>
      </body>
    </html>
   `
      );
    }
  }, [html, css, js]);

  function update(item, e) {
    setPress(true);

    item.id === 1 && setHtml(e);
    item.id === 2 && setJs(e);
    item.id === 3 && setCss(e);
  }

  function languageChanges(e) {
    let languageClick = e.target.innerHTML;
    setLanguageShow(languageClick);
  }

  function saveCode() {
    if (
      createHtml !==
      `<h1>Escribe codigo html, dale funciones con JS o estilos con CSS</h1>`
    ) {
      localStorage.setItem("savecode", createHtml);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: 15,
        paddingLeft: 100,
        paddingRight: 100,
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: "black",
        height: "100vh",
      }}
    >
      {/*Buttons codigo + guardado*/}
      <ButtonContainer
        buttonsLanguages={buttonsLanguages}
        languageChanges={languageChanges}
        saveCode={saveCode}
      />
      {/*Editor*/}
      <EditorJS tools={tools} languageShow={languageShow} update={update} />
      {/*Renderizado de editor*/}
      <Iframe createHtml={createHtml} />
    </div>
  );
};

export default EditJs;
