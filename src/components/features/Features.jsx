import React from 'react';
import { ChartBarIcon } from '@heroicons/react/24/solid'

const Features = ({features}) => {


  
    return (
        <div className='flex'>
            <ChartBarIcon className="h-6 w-6 text-blue-500" />
            <span>{features}</span>
        </div>
    );
};

export default Features;