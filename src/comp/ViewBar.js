import React from 'react';

const ViewBar = ({ viewOptions, viewValue, onChange }) => {
	return (
	    <select
	        className='select'
	        name='viewValue'
	        value={viewValue}
	        onChange={onChange}
	    >
	        { viewOptions.map(option => <option key={option.value} value={option.value}>{option.label}</option>) }
	    </select>
	);
};

export default ViewBar;