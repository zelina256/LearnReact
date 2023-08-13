import React, { useState } from "react";

const HideShow = () => {
  const [hideShow, hideShowSet] = useState(false);
  return (
    <div>
      <button onClick={() => hideShowSet(!hideShow)}>Show</button>
      {hideShow && (
        <ul>
          <li>Element 1</li>
          <li>Element 2</li>
          <li>Element 3</li>
          <li>Element 4</li>
        </ul>
      )}
    </div>
  );
};

export default HideShow;
