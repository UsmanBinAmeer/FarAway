import React, { useState } from 'react';
import './item.css';

function Item({ id, qty, value, items, setItems, setItemCount }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(prev => !prev);
        if (!isChecked) {
            setItemCount(prevCount => prevCount - 1);
        } else {
            setItemCount(prevCount => prevCount + 1);
        }
    };

    const handleDelete = () => {
        const updatedItems = items.filter(item => item.id !== id); // Fixed here
        setItems(updatedItems);
        // setItemCount(updatedItems.length);
    };

    return (
        <div className="item-container">
            <div className='item'>
                <div style={{display:'flex',
                    gap:'10px',
                    alignItems:'center'
                }}>


                <input 
                    onChange={handleCheckboxChange} 
                    className='checBox' 
                    type="checkbox" 
                    checked={isChecked} 
                    />
                <div style={{
                    textDecoration: isChecked ? 'line-through' : 'none',
                    display: 'flex',
                    gap: '20px',
                    color: '#fde7aa'
                }}>
                    <span className='itemName'>{qty}</span>
                    <div className='itemName'>{value}</div>
                </div>
                    </div>
                <button className='itemBtn' onClick={handleDelete}>x</button>
            </div>
        </div>
    );
}

export default Item;
