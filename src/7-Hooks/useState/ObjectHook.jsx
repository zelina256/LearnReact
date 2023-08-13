// name import should be in {}
import React, { useState } from "react";

const ObjectHook = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 24,
    message: "some text",
  });
  const [name, setName] = useState("Peter");
  const [age, setAge] = useState(26);
  const [message, setMessage] = useState("some text");
  const changeMessage = () => {
    // setPerson({ ...person, message: "Hello World" });
    setMessage("Hello World");
  };
  return (
    <>
      <div>
        <p> Name is {name}</p>
        <p> Name is {age}</p>
        <p> Name is {message}</p>
        {/* <p> Name is {person.name}</p>
        <p> Name is {person.age}</p>
        <p> Name is {person.message}</p> */}
        <button onClick={changeMessage} className="btn btn-info text-light">
          Change message
        </button>
        {/* {people.map((person) => {
          return (
            <div className="item">
              <p> Name is {person.name}</p>
              <p> Name is {person.age}</p>
              <p> Name is {person.message}</p>
            </div>
          );
        })} */}
      </div>
    </>
  );
};

export default ObjectHook;
