import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard';

const PriceList = () => {
    const [price, setPrice] = useState([])

    useEffect(() => {
        fetch('price.json')
        .then(res => res.json())
        .then(data => setPrice(data))
    }, [])
    return (
        <div>
           <h2 className='text-6xl text-center bg-purple-500 text-purple-200 p-3 mt-5'>  Add some price PriceList</h2>
          <div className='grid grid-cols-1 md:grid-cols-3'>
          {
            price.map((price)=> <PriceCard
            
            key={price.id}
            price={price}
            
            ></PriceCard>)
           }
          </div>
        </div>
    );
};

export default PriceList;