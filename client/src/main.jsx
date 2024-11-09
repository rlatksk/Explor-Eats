import { StrictMode } from 'react'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import App from './App'
import Home from './pages/home/Home'
import FoodDetails from './pages/details/FoodDetails';
import PlacesDetails from './pages/details/PlacesDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/details/food", // Add id here later
        element: <FoodDetails />,
      },
    ],
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/details/place", // Add id here later
        element: <PlacesDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);