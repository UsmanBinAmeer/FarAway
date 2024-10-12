import './App.css';
import Logo from './components/Logo';
import tree from './assets/tree.png.png';
import briefcase from './assets/brief.png'
import Form from './components/Form/index';
import heartEyes from './assets/heart-eye.png'
import Package from './components/PackagingList/Package';
import Stats from './components/Stats/Stats';
import { useState , useEffect } from 'react';


function App() {
  const [qty,setQty] = useState(1)
  const [value , setvalue] = useState('')
  const [items , setItems] = useState([])
  const [itemCount, setItemCount] = useState(items.length);

  useEffect(() => {
    setItemCount(items.length);
  }, [items]);
  return (
    <div className='app'>
      <Logo src={tree} src2={briefcase}/>
      <Form setItemCount={setItemCount} srcF={heartEyes} setQty={setQty} valuee={value} setvalue={setvalue} setItems={setItems} items={items} qty={qty}/>
      <Package qty={qty} valuee={value} items={items} setItems={setItems} setItemCount={setItemCount} />
      <Stats items={itemCount}/>

    </div>
  );
}

export default App;
