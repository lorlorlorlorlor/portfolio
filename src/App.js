import React, { Component } from 'react';
import './App.scss';
import $ from "jquery";

import './style/theme.scss';
import './scripts/mouse.js';

import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Cool from './components/Cool';
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
          <About portfolio = { this.state.data } />
          <Portfolio portfolio = { this.state.data } />
          <Cool cool = { this.state.data } />
        </div>
        <Footer portfolio = { this.state.data }/>
      </div>
    )
  }
}

export default App;
