import React from 'react';

const OrderByBar = ({ orderByValue, orderByOptions, onChange }) => {	
	return (
	    <select
	        className='select'
	        name='orderByValue'
	        value={orderByValue}
	        onChange={onChange}
	    >
	        { orderByOptions.map(option => <option key={option.value} value={option.value}>{option.label}</option>) }
	    </select>
	);
};

export default OrderByBar;