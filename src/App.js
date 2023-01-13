import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';

export default class App extends Component {
  
  render() 
  {
    return (
      <div>
        <Navbar/>
        <News country={'in'} pageSize={12} category={'general'} apiKey={'df36de1cc1124b98a6b9c7bb698d98e7'}/>
      </div>
    )
  }
}
