import React from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import './search.css';

const search=()=>
{
    return(
        <div className='hero'>
            <div className='content'>
                <form className='search'>
                    <div><input type='text' placeholder='Enter search Keyword...' /></div>
                    <div className='radio'> 
                        <button type='submit'><AiOutlineSearch className='icon'/></button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default search;