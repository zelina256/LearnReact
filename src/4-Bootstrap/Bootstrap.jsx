import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";  // import element
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
const Bootstrap = () => {
  const installBootstrap = `npm install react-bootstrap bootstrap`
  const indexHTMLBootstrap = `<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
  integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
  crossorigin="anonymous"
/>`
  const indexBootstrap = `import 'bootstrap/dist/css/bootstrap.min.css';`
  const codeBootstrap = `import React from "react";
import { Container } from "react-bootstrap";// import element - case 1
import Button from "react-bootstrap/Button";  // import element - case 2
const Bootstrap = () => {
  return (
    <Container>
      <Button as="a" variant="primary">
        Button as link
      </Button>
    </Container>
  );
};

export default Bootstrap;`
  return (
    <Container>
      <h1>Bootstrap</h1>
      <p>First install bootstrap using npm command:</p>
      <SyntaxHighlighter language="javascript" style={dracula} className="w-25">
        {installBootstrap}
      </SyntaxHighlighter>
      <p>Then configure bootstrap:</p>
      <ol><li>
        <p>On the index.html file we set the link in the head element:</p>
        <SyntaxHighlighter language="javascript" style={dracula}>
          {indexHTMLBootstrap}
        </SyntaxHighlighter>
      </li>
        <li>
          <p>In index.js or in the app.js we set the following line - import the css of bootstrap:</p>
          <SyntaxHighlighter language="javascript" style={dracula}>
            {indexBootstrap}
          </SyntaxHighlighter>
        </li></ol>
      <h3>Call elements from bootstrap</h3>
      <p>To use e Bootstrap element:</p>
      <ol>
        <li>Import the element.</li>
        <li>Use the code inside return.</li>
      </ol>
      <p>Example:</p>
      <Button as="a" variant="primary">
        Button as link
      </Button>
      <SyntaxHighlighter language="javascript" style={dracula}>
        {codeBootstrap}
      </SyntaxHighlighter>
    </Container>
  );
};

export default Bootstrap;
