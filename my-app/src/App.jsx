import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [product, setproduct] = useState([])
  const [lukkys, setlukky] = useState('alo')
  const lukky=[
    '1',
    "2",
    '3'
]
  useEffect(()=>{
    async function getProduct(){
    const alo=  await fetch('https://yotea.herokuapp.com/categories')
      const data =await alo.json();
setproduct(data)
    } 
    getProduct()
  })
  const handlerclick =()=>{
  const index=Math.floor(Math.random()*lukky.length)
  setlukky(lukky[index])
  }
  return (
    <div className="App">
      <h1>{lukkys}</h1>
      <button onClick={handlerclick}>click</button> <br />
    {product.map(item=>item.name)}
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>click</button>
    </div>
  )
}

export default App
