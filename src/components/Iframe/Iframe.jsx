import React from "react";
import "./iframe.scss";
const Iframe = ({ createHtml }) => {
  return <iframe className="iframeEditorJs" srcDoc={createHtml}></iframe>;
};

export default Iframe;
