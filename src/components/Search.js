import React from 'react';

//when looking for what an html tag does, looking attributes of the tag page... usually mdn

var Search = ({ onChange, onClick }) => (
    <div>
        <form id="Search">
            <input type="text" placeholder="...search" name="searchText" onChange={onChange} />
            <button id="searchButton" type="button" value="Submit" name="Search" onClick={onClick}>Go!</button>
        </form>
    </div>
    // () => { onClick('Search') 
);

export default Search;