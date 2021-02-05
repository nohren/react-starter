import React from 'react';

//color refs 
const green = '#3EFF00';
const grey = '#EFF0EF';

var ToWatch = ({ onClick, color }) => {
    

    return (
        <div id="ToWatch">
            <button      //onClick is the listener key, onClick is a persistent always listening function (not invoked), changeColor needs to be invoked in a wrapper
         style={{ background: color[1] }}  onClick={()=> {onClick('ToWatch')}}  type="button" value="Submit" name="ToWatch">To Watch</button>
    </div>
    )
};


// onClick={onClick}
// setColor(color = color === grey ? green : grey

export default ToWatch;

// style={{background: color}}