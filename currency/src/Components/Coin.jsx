
import React from "react";
import Card from "./UI/Card";

function Coin(props) {
  return (
    <Card>
      <h5>{props.name}</h5>
      <img src={props.image} alt={props.name}/>
      <h2>{`${props.current} Try`}</h2>
    </Card>
  );
}

export default Coin;
