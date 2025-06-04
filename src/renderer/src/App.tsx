import { Route, Routes } from 'react-router-dom'

import { homeRouter } from './pages/home/router'
import Layout from './Layout'

const App = () => {
  return (
    <Routes>
      {homeRouter}
      <Route path="/categories" element={<Layout />}>
        <Route index element={<h1>Home</h1>} />
      </Route>
      <Route path="/days" element={<Layout />}>
        <Route index element={<h1>Days</h1>} />
      </Route>
    </Routes>
  )
}
export default App
