import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../pages/LoginScreen/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  }
]);

export function Routes() {
  return <RouterProvider router={router} />;
} 