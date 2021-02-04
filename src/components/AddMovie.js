import React from 'react';

//when looking for what an html tag does, looking attributes of the tag page... usually mdn

var AddMovie = ({ onChange, onClick }) => (

    <form>
        <input type="text" placeholder="Add movie title here" name="AddMovie" onChange={onChange} />
        <button id="AddMovie" type="button" value="Submit" name="AddMovie" onClick={onClick}>Add!</button>
    </form>


);

export default AddMovie;