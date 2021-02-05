import React from 'react';

//color refs 
const green = '#3EFF00';
const grey = '#EFF0EF';
var Watched = ({ onClick, color }) => {

    

    // const changeColor = () => {
    //     console.log('triggered changeColor')
    //     var newColor = color === grey ? green : grey;
    //     setColor(newColor); 
    // }


    return (
        <div id="Watched">
            <button      //onClick is the listener key, onClick is a persistent always listening function (not invoked), changeColor needs to be invoked in a wrapper
         style={{ background: color[0] }}  onClick={()=> onClick('Watched')}  type="button" value="Submit" name="Watched">Watched</button>
    </div>
    )
    };




export default Watched;