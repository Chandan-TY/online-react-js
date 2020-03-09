import React from "react";
import Person from "./Person";

export default function PersonList(props) {
  console.log(props);
  const { persons } = props;
  return (
    <div>
      <ul>
        {persons.map(person => {
          return <Person
            action={props.action}
           key={person.id} 
           singleperson={person} />;
        })}
      </ul>
    </div>
  );
}
