import React, { useState } from 'react';

//color refs 
const green = '#3EFF00';
const grey = '#EFF0EF';

var ToWatch = ({ onClick }) => {
    const [color, setColor] = useState(grey);

    const changeColor = () => {
        console.log('triggered changeColor')
        var newColor = color === grey ? green : grey;
        setColor(newColor); 
    }


    return (
        <div>
            <button      //onClick is the listener key, onClick is a persistent always listening function (not invoked), changeColor needs to be invoked in a wrapper
         style={{ background: color }}  onClick={onClick} id="ToWatch" type="button" value="Submit" name="ToWatch">To Watch</button>
    </div>
    )
};


// onClick={onClick}
// setColor(color = color === grey ? green : grey

export default ToWatch;

// style={{background: color}}