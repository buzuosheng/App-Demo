import React from 'react'
import useLocal from '@buzuosheng/use-localstorage'
import './index.css'
import Helmet from "react-helmet";

const UseLocalStorage = () => {
  const [item, setItem] = useLocal('name')
  return (
    < div className="use-localstorage" >
      <Helmet>
        <title>
          useLocalStorage demo
        </title>
      </Helmet>
      <h1>For example: set the key of localstorage to 'name' </h1>
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