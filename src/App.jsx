import { Outlet } from 'react-router'
import Header from './Components/Common/Header'

const App = () => {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default App