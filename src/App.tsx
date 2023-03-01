import React from 'react';
import './App.css';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Main from './components/Main';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Header />}>
        </Route>
      </Routes>
      <Routes>
        <Route path='/' element={<Main />}>
        </Route>
      </Routes>
      <Routes>
        <Route path='channels' element={<Home />}>
        </Route>
      </Routes>
      <Routes>
        <Route path='channels/:id' element={<Main />}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
