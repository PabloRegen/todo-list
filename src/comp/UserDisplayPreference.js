import React from 'react';
import ViewBar from './ViewBar';
import OrderByBar from './OrderByBar';
import SearchBar from './SearchBar';

const UserDisplayPreference = ({ viewOptions, orderByOptions, viewValue, orderByValue, searchValue, onChange }) => {
    return (
        <div className='flexRow'>
            <ViewBar
                viewOptions={viewOptions}
                viewValue={viewValue}
                onChange={onChange} />
            <OrderByBar
                orderByOptions={orderByOptions}
                orderByValue={orderByValue}
                onChange={onChange} />
            <SearchBar
                searchValue={searchValue}
                onChange={onChange} />
        </div>
    );
};

export default UserDisplayPreference;