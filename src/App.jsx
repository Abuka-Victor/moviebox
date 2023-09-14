import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import Index from './Pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
