import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  
  render() 
  {
    return (
      <div>
        <Router>

        <Navbar />
        <Routes>
        <Route path="/" element={<News key ="general" country={'in'} pageSize={12} category={'general'} apiKey={'df36de1cc1124b98a6b9c7bb698d98e7'}/>}/>
        <Route path="/business" element={<News key ="business" country={'in'} pageSize={12} category={'business'} apiKey={'df36de1cc1124b98a6b9c7bb698d98e7'}/>}/>
        <Route path="/entertainment" element={<News key ="entertainment" country={'in'} pageSize={12} category={'entertainment'} apiKey={'df36de1cc1124b98a6b9c7bb698d98e7'}/>}/>
        <Route path="/health" element={<News key ="health" country={'in'} pageSize={12} category={'health'} apiKey={'df36de1cc1124b98a6b9c7bb698d98e7'}/>}/>
        <Route path="/science" element={<News key ="science" country={'in'} pageSize={12} category={'science'} apiKey={'df36de1cc1124b98a6b9c7bb698d98e7'}/>}/>
        <Route path="/sports" element={<News key ="sports" country={'in'} pageSize={12} category={'sports'} apiKey={'df36de1cc1124b98a6b9c7bb698d98e7'}/>}/>
        <Route path="/technology" element={<News key ="technology" country={'in'} pageSize={12} category={'technology'} apiKey={'df36de1cc1124b98a6b9c7bb698d98e7'}/>}/>
        </Routes> 

        </Router>
      </div>
    )
  }
}
