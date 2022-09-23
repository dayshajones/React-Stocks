import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" checked={null} onChange={() => props.sortByName()}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={null} onChange={() => props.sortByPrice()}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => props.filterStocks(e.target.value)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
      <br />
      <label>
        <strong>Search for Stock</strong>
      <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={(e) => props.searchForStock(e.target.value)}/>
        <i className="search icon" />
      </div>
      </div>  
      </label>


    </div>
  );
}


export default SearchBar;
