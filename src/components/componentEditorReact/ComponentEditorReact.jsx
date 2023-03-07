import React from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import "./componentReactStyle.scss";
import { Eyelash } from "../index";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import "./componentReactStyle.scss";
import vsDark from 'prism-react-renderer/themes/vsDark'

const ComponentEditorReact = ({ code, scope }) => {
  return (
    <div className="editorCode">
      <Eyelash icon={faReact} languageShow={"ReactJS"} />
      <LiveProvider code={code} scope={scope}  theme={vsDark}  >
        <div className="reactLive">
          <LiveEditor className="ideReact"/>
          <div className="reactPreview">
            <LiveError />
            <LivePreview />
          </div>
        </div>
      </LiveProvider>
    </div>
  );
};

export default ComponentEditorReact;
