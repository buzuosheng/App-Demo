import React from 'react'
import { useLocalStorage } from '@buzuosheng/use-localstorage'
import './index.css'
import Helmet from "react-helmet";

const UseLocalStorage = () => {
  const [item, setItem] = useLocalStorage('name', { age: '1000' })
  return (
    < div className="use-localstorage" >
      <Helmet>
        <title>
          useLocalStorage demo
        </title>
      </Helmet>
      <h1>For example: set the key of localstorage to 'name' </h1>
      <h2>default age in this case: 1s</h2>
      <h2>default prefix: Prefix:</h2>
      <div>
        <label>
          name:{' '}
          <input
            type="text"
            placeholder="Enter your name"
            value={item}
            onChange={e => setItem(e.target.value)}
          />
        </label>
      </div>
    </ div>
  )
}

export default UseLocalStorage