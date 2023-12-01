import React from 'react';
import Btn from "./btn";

const Todoitem = ({...todo}) => {
    const {text, completed, priority, id} = todo
    return (
        <div>
            <span
                style={{
                    textDecoration: completed ? 'line-through' : 'none',
                    fontWeight: priority ? 'bold' : 'normal'
                }}
            >
                {text}
            </span>
            <div className='flex justify-between items-center w-1/3'>
                <Btn text='Delete'/>
                <Btn text='Complete'/>
                <Btn text='Ptiority'/>

            </div>

        </div>
    );
};

export default Todoitem;