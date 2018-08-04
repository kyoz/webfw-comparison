import React, { Component } from 'react';
import './App.css';
const iquotes = require('iquotes');

class App extends Component {
  render() {

  const quotes = iquotes.all();

  const quoteItems = quotes.map((quote, i) =>
    <div className="quote" key={i}>
      { i } - { quote.quote }
    </div>
  );

    return (
      <div>
        { quoteItems }
      </div>
    );
  }
}

export default App;
