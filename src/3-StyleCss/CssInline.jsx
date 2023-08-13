import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
const CssInline = () => {
  const cssInline = ` <h1 style={{ color: "#ff0000", fontSize: "50px" }}>Inline style</h1>`

  return (
    <div>
      <h1 style={{ color: "#ff0000", fontSize: "50px" }}>Inline style</h1>
      <SyntaxHighlighter language="javascript" style={dracula}>
        {cssInline}
      </SyntaxHighlighter>
    </div>
  );
};

export default CssInline;
