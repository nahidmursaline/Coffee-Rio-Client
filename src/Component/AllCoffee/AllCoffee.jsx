import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCoffeeCard from './AllCoffeeCard';

const AllCoffee = () => {
    const coffees = useLoaderData();

    return (
        <div>
            <h1>All Coffee is Here</h1>
            <div className='grid grid-cols-2 gap-5 w-[1600px] mx-auto'>
                {
                    coffees.map(coffee => <AllCoffeeCard
                    key={coffee._id}
                    coffee = {coffee}
                    ></AllCoffeeCard>)
                }
            </div>
        </div>
    );
};

export default AllCoffee;