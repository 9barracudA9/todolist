import React from 'react';

const Btn = ({props, text}) => {
    return (
        <button
            type='submit'
            className='py-2 px-4 w-36 text-xl border-red border bg-cyan-700 rounded'
        > {text}
        </button>
    );
};

export default Btn;