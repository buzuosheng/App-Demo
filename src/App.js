import LdComponet from "./loading/Loading";
import UseLocalStorage from './uselocalstorage/index'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Router>
        <Route path='/loading' component={LdComponet} />
        <Route path='/uselocalstorage' component={UseLocalStorage} />
      </Router>
    </div>
  )
}
export default App