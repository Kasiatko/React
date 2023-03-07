import {GoBell, GoCloudDownload, GoDatabase} from 'react-icons/go';
import React from 'react';
import Button from './Button';

function App() {

    const handleClick = () => {
        console.log('click')
    }
  return (
    <div>
        <div>
            <Button primary rounded onClick={handleClick} className='mb-5'>
            <GoBell />
            Click me!
            </Button>
        </div>
        <div>
            <Button secondary outline onMouseEnter={handleClick}>Buy Now!</Button>
        </div>
        <div>
            <Button warning onMouseLeave={handleClick}>
            <GoCloudDownload />
            See Deal!
            </Button>
        </div>
        <div>
            <Button success outline >Hide Ads!</Button>
        </div>
        <div>
            <Button danger rounded>
            <GoDatabase />  
            Go to ShoppingCart!
            </Button>
        </div>      
    </div>
  )
}

export default App