import LdComponet from "./loading/Loading";
import UseLocalStorage from './uselocalstorage/index'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Router>
        <Route path='/loading' component={LdComponet} />
        <Route path='/uselocalstorage' component={UseLocalStorage} />
        <div className="flex flex-col items-center justify-center text-green-400 text-xl font-semibold">
          <p className="mt-4"><Link to='/loading'>loading</Link></p>
          <p className="mt-4"><Link to='/uselocalstorage'>uselocalstorage</Link></p>
        </div>
      </Router>
    </div>
  )
}
export default App