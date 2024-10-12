import './package.css'
import Item from '../item/index.js'

function Package({items , setItems , setItemCount }) {

  return (
    <div className='package'>
      {
        items.map(item => (
          <Item key={item.id}
            id={item.id}
            qty={item.qty}
            value={item.valuee}
            items={items}
            setItems={setItems}
            setItemCount={setItemCount} />
        ))
      }
    </div>
  )
}
export default Package