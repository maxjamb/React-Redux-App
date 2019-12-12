import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const Character = props => {
  //   console.log(props.chars.img);
  return (
    <Card>
      {/* <Image src={props.data.img} wrapped ui={false} /> */}
      <Card.Header>{props.chars.name}</Card.Header>
    </Card>
  );
};

export default Character;
