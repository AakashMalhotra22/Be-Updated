import './App.css';
import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  
  apiKey = process.env.REACT_APP_NEWS_API;
  state={
    progress:0 
  }
  setProgress =(progress)=>
  {
    this.setState({
        progress: progress
      }
    )
  }
  render() 
  {
    return (
      <div>
        <Router>
        <Navbar />
        <LoadingBar
        color='#f11946'
        height={2}
        progress={this.state.progress}
        />
        <Routes>
        <Route path="/" element={<News setProgress = {this.setProgress} key ="general" country={'in'} pageSize={12} category={'general'} apiKey={this.apiKey}/>}/>
        <Route path="/business" element={<News setProgress = {this.setProgress} key ="business" country={'in'} pageSize={12} category={'business'} apiKey={this.apiKey}/>}/>
        <Route path="/entertainment" element={<News setProgress = {this.setProgress} key ="entertainment" country={'in'} pageSize={12} category={'entertainment'} apiKey={this.apiKey}/>}/>
        <Route path="/health" element={<News setProgress = {this.setProgress} key ="health" country={'in'} pageSize={12} category={'health'} apiKey={this.apiKey}/>}/>
        <Route path="/science" element={<News setProgress = {this.setProgress} key ="science" country={'in'} pageSize={12} category={'science'} apiKey={this.apiKey}/>}/>
        <Route path="/sports" element={<News setProgress = {this.setProgress} key ="sports" country={'in'} pageSize={12} category={'sports'} apiKey={this.apiKey}/>}/>
        <Route path="/technology" element={<News setProgress = {this.setProgress} key ="technology" country={'in'} pageSize={12} category={'technology'} apiKey={this.apiKey}/>}/>
        </Routes> 

        </Router>
      </div>
    )
  }
}
