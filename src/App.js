import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.scss';
import $ from "jquery";

import './style/theme.scss';
import './scripts/mouse.js';

import Home from './pages/Home';
import Book from './pages/Book';
import Header from './components/Header';
import Footer from './components/Footer';


class App extends Component {

  constructor(props) {
    super();
    this.state = {
      data:{}
    };
  }

  componentDidMount() {
    this.loadData('./data.json');
  }

  loadData(path) {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ data: data});
      }.bind(this),
      error: function (xhr, status, error) {
        alert(error);
      },
    });
  }

  render() {
    return (
      <div className="app">
        <Header portfolio = { this.state.data } />
        <div className="app-content">
          <div className="mouse">
            hello
          </div>       
          <Routes>
              <Route path="/" element={<Home portfolio = { this.state.data } />} />
              <Route path="/book" element={<Book />} />
          </Routes>
        </div>
        <Footer portfolio = { this.state.data }/>
      </div>
    )
  }
}

export default App;
