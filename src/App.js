import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router, 
  Route, 
  Routes
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/technology" element={<News key="technology" country="us" category="technology"/>}></Route>
        <Route path="/sports" element={<News key="sports" country="ca" category="sports"/>}></Route>
        <Route path="/science" element={<News key="science" country="in" category="science"/>}></Route>
        <Route path="/health" element={<News key="health" country="us" category="health"/>}></Route>
        <Route path="/entertainment" element={<News key="entertainment" country="ca" category="entertainment"/>}></Route>
        <Route path="/business" element={<News key="business" country="in" category="business"/>}></Route>
        <Route exact path="/" element={<News key="general" country="us" category="general"/>}></Route>
      </Routes>
      </Router>
      </>
    )
  }
}

