import React from 'react';

//when looking for what an html tag does, looking attributes of the tag page... usually mdn

var AddMovie = ({ onChange, onClick, value }) => (

    <form>
        <input type="text" value={value} placeholder="Add movie title here" name="AddMovie" onChange={onChange} />
        <button id="AddMovie" type="button" value="Submit" name="AddMovie" onClick={() => {onClick('AddMovie')}}>Add!</button>
    </form>


);

export default AddMovie;