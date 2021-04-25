import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const [buttonValue, setButtonValue] = React.useState("Clear Items");

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
    setButtonValue("Reset Items");
  };

  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}> remove </button>
          </div>
        );
      })}
      <button
        id="btnID"
        className="btn"
        onClick={() => {
          if (people == data) {
            setPeople([]);
            setButtonValue("Reset Items");
          } else {
            setPeople(data);
            setButtonValue("Clear Items");
          }
        }}
      >
        {buttonValue}
      </button>
    </>
  );
};

export default UseStateArray;
