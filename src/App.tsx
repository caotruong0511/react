import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Info } from './type/Info'
import ShowInfo from './component/ShowInfo'

function App() {
  const [count, setCount] = useState(0)
  
  const [Info, setInfo] = useState<Info>({
    name:'truong',
    age:3
  })

  return (
    <div className="App">
      <ShowInfo Person={Info} name={Info} />
    </div>
  )
}

export default App
