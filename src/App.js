import React from 'react';
import { Card } from 'react-bootstrap';
import Name from './Components/Name/Name';
import Price from './Components/Price/Price';
import Description from './Components/Description/Description';
import Image from './Components/Images/Images';

function App() {
  return (
    <div className="App">
    <Card>
      <Card.Body>
        <Name />
        <Price />
        <Description />
        <Image />
      </Card.Body>
    </Card>
  </div>
  );
}

export default App;
