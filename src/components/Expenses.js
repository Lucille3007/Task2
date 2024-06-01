

import ExpenseItem from './ExpenseItem';
import React from 'react';

function Expenses(props) {

    return (
        <div className='expenses'>
            {props.items.map((item, index) => (
                <ExpenseItem
                    key={index}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                ></ExpenseItem>
            ))}

        </div>
    )
}
export default Expenses


