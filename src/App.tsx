import { useEffect, useState } from 'react'
import './App.css'
import type{Pizza} from './types/Pizza'
import apiClient from './api/apiClient'

function App() {
  const [count, setCount] = useState(0)
  const [pizzak,setPizzak] = useState<Array<Pizza>>();

  useEffect(() =>{
    apiClient.get("/pizzak").then((response) => console.log(response.data))
    console.log(pizzak);
  },[])

  return (
    <>
     <h1>{pizzak?.map(p => <p>{p.nev}</p>)}</h1>
    </>
  )
}

export default App
