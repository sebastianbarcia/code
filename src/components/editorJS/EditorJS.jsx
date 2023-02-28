import React from "react";
import Editor from "@monaco-editor/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./editorJs.scss";

const EditorJS = ({ tools, languageShow, update }) => {
  return (
    <div className="editorJsStyles">
      {tools.map((item) => {
        {
          if (languageShow.toLowerCase() === item.title) {
            return (
              <div>
                <div className="toolsEditorJs">
                  <FontAwesomeIcon icon={item.icon} />
                  <p>{languageShow}</p>
                </div>
                <Editor
                  key={item.id}
                  defaultLanguage={item.title}
                  onChange={(e) => update(item, e)}
                  defaultValue={item.value}
                  theme="vs-dark"
                  height={"90vh"}
                />
              </div>
            );
          }
        }
      })}
    </div>
  );
};

export default EditorJS;
