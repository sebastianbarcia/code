import React from "react";
import Editor from "@monaco-editor/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EditorJS = ({ tools, languageShow, update }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 5,
        width: "80%",
      }}
    >
      {tools.map((item) => {
        {
          if (languageShow.toLowerCase() === item.title) {
            return (
              <div>
                <div
                  style={{
                    width: "20%",
                    paddingTop: 1,
                    color: "white",
                    paddingLeft: 28,
                    backgroundColor: "#252526",
                    display: "flex",
                    alignItems: "center",
                  }}
                
                >
                  <FontAwesomeIcon icon={item.icon} />
                  <p style={{ margin: 10 }}>{languageShow}</p>
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
