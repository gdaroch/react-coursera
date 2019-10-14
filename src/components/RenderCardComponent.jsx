import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

function RenderCard ({ item }) {

  return (
    <Card>
        <CardImg src={item.image} alt={item.name} />
        <CardBody>
        <CardTitle>{item.name}</CardTitle>
        {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
        <CardText>{item.description}</CardText>
        </CardBody>
    </Card>
  );
}

export default RenderCard;
