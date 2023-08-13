import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import FunctionComponent from './FunctionComponent'
import ClassComponent from './ClassComponent'
import { Container } from 'react-bootstrap';
import ArrayFunctionComponent from './ArrayFunctionComponent';

const Components = () => {
    const afc = `const ArrayFunctionComponent = () => {
    return (
        <div>
            return <h1>Hello Array FunctionComponent</h1>;
        </div>
    )
}
export default ArrayFunctionComponent`;
    const fc = `function FunctionComponent() {
  return <h1> Hello Function Component </h1>;
}
export default FunctionComponent;`;
    const cc = `class ClassComponent extends React.Component {
  render() {
    return <h1>Hi, I am a ClassComponent</h1>;
  }
}
export default ClassComponent;
`
    return (
        <Container>
            <h1 className='display-1'>What is a Component?</h1>
            <p>A component is a reusable, self-contained piece of code that encapsulates a
                specific functionality, user interface (UI), or behavior.
                Components are the building blocks of React applications,
                and they allow you to split the user interface into smaller, manageable parts.</p>
            <h2 className='display-2'>How to build a component:</h2>
            <p>There are 3 ways to build a component:</p>
            <h3 className='display-3'>1- Function Component</h3>
            <FunctionComponent />
            <p>Syntax:</p>
            <SyntaxHighlighter language="javascript" style={dracula}>
                {fc}
            </SyntaxHighlighter>
            <h3 className='display-3'>2- Array Function Component</h3>
            <ArrayFunctionComponent />
            <p>Syntax:</p>
            <SyntaxHighlighter language="javascript" style={dracula}>
                {afc}
            </SyntaxHighlighter>
            <h3 className='display-3'>3- Class Component</h3>
            <ClassComponent />
            <p>Syntax:</p>
            <SyntaxHighlighter language="javascript" style={dracula}>
                {cc}
            </SyntaxHighlighter>
        </Container>
    )
}

export default Components
