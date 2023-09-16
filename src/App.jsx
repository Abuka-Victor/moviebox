import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import MovieDetail from './Pages/MovieDetail';
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
      {
        path: 'movies/:id',
        element: <MovieDetail />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
