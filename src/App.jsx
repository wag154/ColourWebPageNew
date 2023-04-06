import Nav from './Nav';
import {Home, ColorPage, ColorItem,NewColorForm} from './pages';
import './App.css';
import React from "react";
import {Routes, Route} from 'react-router-dom';
import { ColorProvider } from './context';
function App() {
  return (
    <div className="App">
      <ColorProvider>
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />}/>
        <Route path="/color">
          <Route index element={<ColorPage />}/>
          <Route path=":hex" element={<ColorItem />}/>
        </Route>
        <Route path = "/NewColor" element = {<NewColorForm/>}/>
        <Route path="*" element={<h1>Not found</h1>}></Route>
      </Route>
    </Routes>
    </ColorProvider>
</div>
  )
}

export default App;
