import React, { useState, useEffect } from "react";

const tools = [
  { id: 1, title: "HTML" },
  { id: 2, title: "Javascript" },
  { id: 3, title: "CSS" },
];

const EditJs = () => {
  const [createHtml, setCreateHtml] = useState(
    `<h1>Escribe codigo html, dale funciones con JS o estilos con CSS</h1>`
  );
  const [html, setHtml] = useState();
  const [js, setJs] = useState();
  const [css, setCss] = useState();
  const [press, setPress] = useState(false);

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

  function update(e) {
    setPress(true);

    e.target.id === "1" && setHtml(e.target.value);   
    e.target.id === "2" && setJs(e.target.value);
    e.target.id === "3" && setCss(e.target.value);

  }

  return (
    <>
      {tools.map((item) => {
        return (
          <div key={item.id}>
            <label>{item.title}</label>
            <textarea id={item.id} onInput={update}></textarea>
          </div>
        );
      })}
      <iframe srcDoc={createHtml}></iframe>
    </>
  );
};

export default EditJs;
