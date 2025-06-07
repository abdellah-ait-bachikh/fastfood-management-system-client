import { Route } from 'react-router-dom'
import Days from './Days'
import Layout from '@renderer/Layout'

export const daysRoutes = (
  <Route path="/days" element={<Layout />}>
    <Route index element={<Days />} />
  </Route>
)
