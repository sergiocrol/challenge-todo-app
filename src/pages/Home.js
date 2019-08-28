import React, { Component } from 'react';
import Header from '../components/Header';
import Nav from '../components/Nav';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Nav />
      </div>
    )
  }
}

export default Home;