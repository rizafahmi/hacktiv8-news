import React, { Component } from 'react';

import NewsHeader from './NewsHeader.js'
import NewsList from './NewsList.js'

class App extends Component {
  render() {
    return (
      <div className="container">
        <NewsHeader />
        <NewsList />
      </div>
    );
  }
}

export default App;
