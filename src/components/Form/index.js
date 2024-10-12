// import React, { useState } from 'react'
import './form.css'
// import Item from '../item/index.js';

function Form({ srcF, setQty, setvalue, valuee, qty, setItems, items, setItemCount }) {
    function addHandler() {
        console.log(qty)
        console.log(valuee)
        let tempItems = [...items]
        console.log(tempItems)
        console.log(items, 'itemsss ')

        if (valuee) {
            const newItemId = Date.now();
            let newItem = {
                qty: qty,
                valuee: valuee,
                id: newItemId,

            }
            tempItems.push(newItem)
            setItems(tempItems)
        }

        setvalue('')

    }
    return (

        <div className='form'>
            <p className='para' >what do you need for your <span>  <img className='emoji' src={srcF} alt="" />  </span> trip ?</p>
            <Option setQty={setQty} items={items} />
            <input onChange={(i) => setvalue(i.target.value)} type="text" className='inputs' placeholder='What is your Requirements?' value={valuee} />
            <button onClick={addHandler} className="btn">Add</button>
        </div >
    )
}


export default Form


function Option({ setQty, items }) {


    return (
        <select className='select'>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e) => <option className='option'>{e}</option>
            )}
        </select>
    )
}