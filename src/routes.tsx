import { createBrowserRouter } from 'react-router-dom'

import { InitialPage } from './pages/initial-page'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <InitialPage />,
    // errorElement: <Error />,
    // children: [{ path: '/', element: <Component /> }],
  },
])
