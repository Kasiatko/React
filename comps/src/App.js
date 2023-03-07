import React from 'react';
import Button from './Button';

function App() {
  return (
    <div>
        <div>
            <Button primary rounded>Click me!</Button>
        </div>
        <div>
            <Button secondary rounded outline>Buy Now!</Button>
        </div>
        <div>
            <Button warning outline>See Deal!</Button>
        </div>
        <div>
            <Button success>Hide Ads!</Button>
        </div>
        <div>
            <Button danger outline>Go to ShoppingCart!</Button>
        </div>      
    </div>
  )
}

export default App