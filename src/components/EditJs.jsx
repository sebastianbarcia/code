import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react"

const EditJs = () => {
  const [createHtml, setCreateHtml] = useState(
    `<h1>Escribe codigo html, dale funciones con JS o estilos con CSS</h1>`
  );
  const [html, setHtml] = useState();
  const [js, setJs] = useState();
  const [css, setCss] = useState();
  const [press, setPress] = useState(false);

  const tools = [
    { id: 1, title: "html" , value: html },
    { id: 2, title: "javascript"  , value: js },
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
        <script>
          ${js}
        </script>
        ${html}
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
    <>
      {
        tools.map((item) => {
          return(
            <div style={{ display: "flex" , gap:15 }} key={item.id}>
            <div style={{width:"100%"}} >
              <Editor
                height="40vh"
                defaultLanguage={item.title}
                onChange={(e) => update(item , e)}
                defaultValue={item.value}
                theme= "vs-dark"
              />
            </div>
            </div>
          )
        })
      }  
      <iframe srcDoc={createHtml}></iframe>
    </>
  );
};

export default EditJs;
