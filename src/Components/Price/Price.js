import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import peel4 from '../../../src/Image/peel4.jpg';

const Price = () => {
  return (
    <div>
        <div>
        <Card style={{ width: '18rem' }}>
        <img src={peel4} alt="display"/>
      <Card.Body>
        <Card.Title>Hello, there!</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        </div>
    </div>
  )
}

export default Price