import React from 'react';

const ViewBar = props => {
	const { viewOptions, viewValue, onChange } = props;

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