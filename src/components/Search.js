import React from 'react';

//when looking for what an html tag does, looking attributes of the tag page... usually mdn

var Search = ({ onChange, onClick, value, onSubmit }) => (
    <div id="Search">
        <form>
            <input type="text" value={value} placeholder="...search" name="searchText" onChange={onChange} />
            <button id="searchButton" type="button" value="Submit" name="Search" onClick={() => {onClick('Search')}}>Go!</button>
        </form>
    </div>
    // () => { onClick('Search') 
);

export default Search;