import React, { useState } from 'react'; 
import './Counter.scss';

// export class HelloWorldProps {
//     message: string = ''; 
// }

function CountClick() {

    const [clickNumber, setClickNumber] = useState(0); 

    return (
        <div>
            <button onClick={()=> setClickNumber(clickNumber + 1)}>
            click 
            </button> 
            
            <p> {clickNumber} </p>
        </div>

    ); 
}

export default CountClick; 