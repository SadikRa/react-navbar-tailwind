import React from 'react';
import Features from './features/Features';

const PriceCard = ({price}) => {
    return (
        <div className='bg-sky-500 rounded m-3 p-3 flex flex-col'>
            <h1 className='text-center'>
                <span className='text-6xl text-purple-500'>
                    {price.price}
                </span>
                <span>/mon</span>
            </h1>
            <h1 className='text-4xl text-purple-500  text-center '>{price.name}</h1>
            <h1>features:</h1>
            {
                price.features.map((features , idx) => <Features key={idx} features={features}></Features>)
            }
            <button className='w-full bg-lime-300 p-2 m-2 font-bold rounded mt-auto hover:bg-lime-500'>Buy Now</button>
        </div>
    );
};

export default PriceCard;