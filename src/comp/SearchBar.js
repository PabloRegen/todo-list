import React from 'react';

const SearchBar = ({ searchValue, onChange }) => {
	return (
	    <input
	        className='search'
	        name='searchValue'
	        type='search'
	        placeholder='Search tasks...'
	        value={searchValue}
	        onChange={onChange}
	    />
	);
};

export default SearchBar;