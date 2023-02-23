import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";

const EditJs = () => {
  const [createHtml, setCreateHtml] = useState(
    `<h1>Escribe codigo html, dale funciones con JS o estilos con CSS</h1>`
  );
  const [html, setHtml] = useState();
  const [js, setJs] = useState();
  const [css, setCss] = useState();
  const [press, setPress] = useState(false);

  const tools = [
    { id: 1, title: "html", value: html },
    { id: 2, title: "javascript", value: js },
    { id: 3, title: "css", value: css },
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

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "90vh",
        justifyContent: "center",
        gap: 15,
      }}
    >
      <iframe
        style={{
          backgroundColor: "white",
          width: "80%",
          height: "40vh",
          border: "none",
        }}
        srcDoc={createHtml}
      ></iframe>
      <div
        style={{ display: "flex", flexDirection: "row", gap: 5, width: "80%" }}
      >
        {tools.map((item) => {
          return (
            <Editor
              height="30vh"
              key={item.id}
              defaultLanguage={item.title}
              onChange={(e) => update(item, e)}
              defaultValue={item.value}
              theme="vs-dark"
            />
          );
        })}
      </div>
    </div>
  );
};

export default EditJs;
