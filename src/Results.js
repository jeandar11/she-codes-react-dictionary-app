import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.data) {
    return (
      <div className="Results">
        <h2>
          <strong>{props.data.word}</strong>
        </h2>
        {props.data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning data={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
