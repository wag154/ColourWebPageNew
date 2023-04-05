import Nav from './Nav';
import {Home, ColorPage, ColorItem} from './pages';
import './App.css';
import React from "react";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />}/>
        <Route path="/color">
          <Route index element={<ColorPage />}/>
          <Route path=":name" element={<ColorItem />}/>
        </Route>
        <Route path="*" element={<h1>Not found</h1>}></Route>
      </Route>
    </Routes>
</div>
  )
}

export default App;
