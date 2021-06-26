import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-chaos";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools.js";

export default function Editor(data) {
  return (
    <AceEditor
      mode={data.mode}
      width="100%"
      height="100%"
      theme={data.dark ? "chaos" : "github"}
      onChange={data.onChange}
      fontSize={14}
      showPrintMargin={true}
      showGutter={true}
      highlightActiveLine={true}
      value={data.value}
      wrapEnabled={true}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  );
}
