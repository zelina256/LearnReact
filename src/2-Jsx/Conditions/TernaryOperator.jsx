import React from "react";

const TernaryOperator = () => {
  var notat = [
    {
      emri: "Sergi",
      nota: 5,
    },
    {
      emri: "Frida",
      nota: 10,
    },
    {
      emri: "Anisa",
      nota: 10,
    },
    {
      emri: "Also",
      nota: 7,
    },
    {
      emri: "Angjelo",
      nota: 6,
    },
    {
      emri: "Andi",
      nota: 9,
    },
    {
      emri: "Poli",
      nota: 10,
    },
    {
      emri: "Rei",
      nota: 8,
    },
  ];
  var z = 5;
  return (
    <div>
      {z !== 5 ? (
        <h3>This is the message if the condition is true</h3>
      ) : (
        <h3>This is the message if the condition is false </h3>
      )}
      {notat.map((value, index) => {
        return value.nota > 8 ? (
          <p key={index}>
            {value.emri} - {value.nota}
          </p>
        ) : null;
      })}
    </div>
  );
};

export default TernaryOperator;
