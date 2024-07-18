import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='flex justify-center gap-2 bg-[#d0f0c0] p-4'>
            <Link to="/"><h1 className='text-2xl text-green-500 font-bold'>View Teas</h1></Link>
            <Link to="/addTea"><h1 className='text-2xl text-green-500 font-bold'>Add Teas</h1></Link>
            
        </div>
    );
};

export default Header;