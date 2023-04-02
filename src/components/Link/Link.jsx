import React from 'react';

const Link = ({route}) => {
    return (
        <div>
            <li className='mr-12  p-2 ms-2 rounded hover:bg-sky-700 duration-300'>{route.name}</li>
        </div>
    );
};

export default Link;