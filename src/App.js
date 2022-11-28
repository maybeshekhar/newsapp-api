import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  
  render() {
    return (
     
      <>
      <BrowserRouter>
          <Navbar />
          <Routes>
              <Route path='/general' element={<News key="general" pageSize={9} category="general" />} />
              <Route path='/business' element={<News key="business" pageSize={9} category="business" />} />
              <Route path='/entertainment' element={<News key="entertainment" pageSize={9} category="entertainment" />} />
              <Route path='/health' element={<News key="health" pageSize={9} category="Health" />} />
              <Route path='/science' element={<News key="science" pageSize={9} category="science" />} />
              <Route path='/sports' element={<News key="sports" pageSize={9} category="sports" />} />
              <Route path='/technology' element={<News key="technology" pageSize={9} category="technology" />} />
          </Routes>
      </BrowserRouter>
  </>
      
    )
  }
}