import React from "react";
const conditions = (props) => {
  return (
    <div>
      {props.responseObj.cod === "200" ? (
        <div>
          {props.error && <small>Please enter a valid city.</small>}
          <p>
            It is currently {Math.round(props.responseObj.list[0].main.temp)} °C
            in <strong>{props.responseObj.city.name}</strong>.
          </p>
        </div>
      ) : null}
    </div>
  );
};
export default conditions;
