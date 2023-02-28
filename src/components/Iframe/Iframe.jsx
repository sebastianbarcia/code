import React from "react";

const Iframe = ({ createHtml }) => {
  return (
    <iframe
      style={{
        backgroundColor: "white",
        width: "100%",
        height: "90vh",
        border: "none",
        marginTop: 40,
      }}
      srcDoc={createHtml}
    ></iframe>
  );
};

export default Iframe;
