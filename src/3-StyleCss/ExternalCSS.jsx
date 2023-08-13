import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import "./external.css";

const ExternalCSS = () => {

  const cssExternal = `import "./external.css";`
  return (
    <div>
      <h1 className="title">Some text here</h1>
      <SyntaxHighlighter language="javascript" style={dracula}>
        {cssExternal}
      </SyntaxHighlighter>
    </div>
  );
};

export default ExternalCSS;
