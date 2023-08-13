import React from "react";
import { Container } from "react-bootstrap";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
const RulesJSX = () => {
  const r1 = `function FunctionComponent() {
  return <h1> First Rule </h1>;
}
export default FunctionComponent;`
  const r21 = `function FunctionComponent() {
  return( 
    <section> 
      <h1> Second Rule </h1>;
      <p>More then one instruction - using section</p> 
    </section>
  ) 
}
export default FunctionComponent;`
  const r22 = `function FunctionComponent() {
  return( 
    <div> 
      <h1> Second Rule </h1>;
      <p>More then one instruction - using div</p> 
    </div>
  ) 
}
export default FunctionComponent;`
  const r231 = `function FunctionComponent() {
  return( 
    <React.Fragment> 
      <h1> Second Rule </h1>;
      <p>More then one instruction - using React-Fragment</p> 
    </React.Fragment>
  ) 
}
export default FunctionComponent;`
  const r232 = `function FunctionComponent() {
  return( 
    <> 
      <h1> Second Rule </h1>;
      <p>More then one instruction - using empty tag</p> 
    </>
  ) 
}
export default FunctionComponent;`
  const r3 = `function FunctionComponent() {
  return( 
    <> 
     <p id="rule3">We can have attributes normally</p>
    </>
  ) 
}
export default FunctionComponent;`
  const r4 = `function FunctionComponent() {
  return( 
    <> 
     <h2 className="display-2">Rule 5</h2>
    </>
  ) 
}
export default FunctionComponent;`
  const r5 = `function FunctionComponent() {
  return( 
    <> 
       <img
        alt="some text"
        src="https://images.unsplash.com/photo-1660157120523-1333562e0da1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
      />
    </>
  ) 
}
export default FunctionComponent;`
  return (
    <Container className="my-5">
      <h1 className="display-1">JSX Rules</h1>
      <h2 className="display-2">Rule 1</h2>
      <p>If it is a single element, we don't need to wrap in divs.</p>
      <SyntaxHighlighter language="javascript" style={dracula}>
        {r1}
      </SyntaxHighlighter>
      <h2 className="display-2">Rule 2</h2>
      <p>
        If we want to return more then one html element, we need to warp them in
        a div or section or Fragment.
      </p>
      <ol>
        <li> &lt;section&gt; Code goes here &lt;/section&gt;
          <SyntaxHighlighter language="javascript" style={dracula}>
            {r21}
          </SyntaxHighlighter></li>
        <li> &lt;div&gt; Code goes here &lt;/div&gt;
          <SyntaxHighlighter language="javascript" style={dracula}>
            {r22}
          </SyntaxHighlighter>
        </li>
        <li>
          Fragment is build
          <ul>
            <li>
              &lt;React.Fragment&gt; Code goes here &lt;/React.Fragment&gt;
              <SyntaxHighlighter language="javascript" style={dracula}>
                {r231}
              </SyntaxHighlighter>
            </li>
            <li>just a empty tag &lt;&gt; code goes here &lt;/&gt;</li>
            <SyntaxHighlighter language="javascript" style={dracula}>
              {r232}
            </SyntaxHighlighter>
          </ul>
        </li>
      </ol>

      <h2 className="display-2">Rule 3</h2>
      <p id="rule3">We can have attributes normally.</p>
      <SyntaxHighlighter language="javascript" style={dracula}>
        {r3}
      </SyntaxHighlighter>
      <h2 className="display-2">Rule 4</h2>
      <p>
        Class attribute can't be just class. It should be className = "value" .
      </p>
      <SyntaxHighlighter language="javascript" style={dracula}>
        {r4}
      </SyntaxHighlighter>
      <h2 className="display-2">Rule 5</h2>


      <p>
        Every tag must have the closing tag. Single tags (unpaired tags) like
        img, input ect. needs to be closed
      </p>
      <div className="d-flex justify-content-evenly">
        <img
          alt="some text"
          src="https://images.unsplash.com/photo-1660157120523-1333562e0da1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
        />
        <SyntaxHighlighter language="javascript" style={dracula}>
          {r5}
        </SyntaxHighlighter>
      </div>

    </Container>
  );
};

export default RulesJSX;
