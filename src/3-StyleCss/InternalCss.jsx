import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

const InternalCss = () => {
  const cssInternal = ` const divStyle = {
    width: "100px",
    height: "100px",
    backgroundColor: "lightblue",
  };
  return
    <div style={divStyle}>

    </div>};
export default InternalCss;`
  const divStyle = {
    width: "100px",
    height: "100px",
    backgroundColor: "lightblue",
  };
  return <>
    <div style={divStyle}>

    </div>
    <SyntaxHighlighter language="javascript" style={dracula}>
      {cssInternal}
    </SyntaxHighlighter>
  </>;
};

export default InternalCss;
