// name import should be in {}
import React from "react";
import { data } from "../date/data";
// hooks are called with use
// must  be in the function/component body
// can't call conditionally
const ArrayHook = () => {
  // array, a new way to call use state
  // const [people, setPeople] = React.useState([]);
  const [people, setPeople] = React.useState(data);
  // return a new array
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    console.log(newPeople);
    setPeople(newPeople);
  };
  // const updateItem = (id) => {
  //   let updatePeople = people.find((person) => person.id === id);
  //   updatePeople.name = "text";
  //   console.log(updatePeople);
  // };
  return (
    <>
      <div>
        {people.map((person) => {
          const { id, name } = person;
          return (
            <div key={id} className="item">
              <h4>{name}</h4>
              <button className="btn btn-danger" onClick={() => removeItem(id)}>
                Delete
              </button>
            </div>
          );
        })}
        <button className="btn btn-danger" onClick={() => setPeople([])}>
          Delete All
        </button>
      </div>
    </>
  );
};

export default ArrayHook;
