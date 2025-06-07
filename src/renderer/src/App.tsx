import { Route, Routes } from 'react-router-dom'

import { homeRouter } from './pages/home/router'
import Layout from './Layout'
import { daysRoutes } from './pages/day/router'

const App = () => {
  return (
    <Routes>
      {homeRouter}
      {daysRoutes}
      <Route path="/categories" element={<Layout />}>
        <Route index element={<h1>Home</h1>} />
      </Route>
    </Routes>
  )
}
export default App
