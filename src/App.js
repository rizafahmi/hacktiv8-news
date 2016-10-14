import React, { Component } from 'react';

import NewsHeader from './NewsHeader.js'
import NewsItem from './NewsItem.js'

class App extends Component {
  render() {
    return (
      <div className="container">
        <NewsHeader />
        <NewsItem />
      </div>
    );
  }
}

export default App;
