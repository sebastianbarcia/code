import React from "react";
import Editor from "@monaco-editor/react";
import "./editorJs.scss";
import Eyelash from "../eyelash/Eyelash";

const EditorJS = ({ tools, languageShow, update }) => {
  return (
    <div className="editorJsStyles">
      {tools.map((item) => {
        {
          if (languageShow.toLowerCase() === item.title) {
            return (
              <div key={item.id}>
                <Eyelash icon={item.icon} languageShow={languageShow} />
                <Editor
                  key={item.id}
                  defaultLanguage={item.title}
                  onChange={(e) => update(item, e)}
                  defaultValue={item.value}
                  theme="vs-dark"
                  // height={"55rem"}
                  className="editorStyle"
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
