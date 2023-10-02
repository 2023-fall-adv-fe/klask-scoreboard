import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button'
import SmartDisplay from '@mui/icons-material/SmartDisplay';

import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";

import { Home } from './Home';
import { Setup } from './Setup';
import { Play } from './Play';

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/setup",
    element: <Setup />,
  },
  {
    path: "/play",
    element: <Play />,
  },
]);

const App = () => {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

/* <Button variant="outlined" size="large" startIcon={<SmartDisplay />}>
        Play Game
      </Button> */

export default App;
