import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Eyelash.scss";

const Eyelash = ({ icon, languageShow }) => {
  return (
    <div className="toolsEditorJs">
      <FontAwesomeIcon icon={icon} />
      <p>{languageShow}</p>
    </div>
  );
};

export default Eyelash;
