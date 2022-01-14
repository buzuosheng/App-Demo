// import { useLocalStorage } from '@buzuosheng/use-localstorage'
import { useLocalStorage } from '../hooks/uselocalStorage/use-localstorage'
import Helmet from 'react-helmet'

const UseLocalStorage = () => {
  const [item, setItem] = useLocalStorage('name', { age:'3s',initialValue: '123' })
  return (
    <div className="m-8 p-16 border rounded-xl bg-gray-50">
      <Helmet>
        <title>useLocalStorage demo</title>
      </Helmet>
      <p className="text-center text-2xl">
        For example: set the key of localstorage to
        <span className="text-green-400">name</span>
      </p>
      <p className="mt-4 text-center text-2xl">
        default age in this case: <span className="text-green-400">5s</span>
      </p>
      <p className="mt-4 text-center text-2xl">
        default prefix: <span className="text-green-400">Prefix:</span>
      </p>
      <div className="mt-4 text-center text-2xl">
        <span>name:</span>
        <input
          className="ml-4 py-1 px-2 outline-none border rounded-lg"
          placeholder="Enter your name"
          value={item || ''}
          onChange={(e) => setItem(e.target.value)}
        />
      </div>
      <div className="mt-4 text-center text-2xl">
        <span>set the value to an object</span>
        <button
          className="w-20 border rounded-lg focus:outline-none bg-green-200 text-white ml-4 p-1"
          onClick={() => setItem('{}')}
        >
          Click
        </button>
      </div>
      <p className="mt-4 text-center text-2xl">
        see values via
        <span className="text-green-400">
          devtool {'->'} application {'->'} local Storage
        </span>
      </p>
    </div>
  )
}

export default UseLocalStorage
