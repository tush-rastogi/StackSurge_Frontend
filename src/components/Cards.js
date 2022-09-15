import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from 'react';

function Cards(props) {

    console.log(props.cardInfo.image);
    let len=props.cardInfo.text.length;
  return (
    <Card style={{ width: '18rem'}} className="mt-3">
      <Card.Img variant="top" src={require(`../images/${props.cardInfo.image}`)} style={{height:'150px'}}/>
      <Card.Body>
        <Card.Title>{props.cardInfo.title}</Card.Title>
        <Card.Text style={{ overflowY: len>50?'scroll':'none',height:'120px'}}>
           {props.cardInfo.text}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;