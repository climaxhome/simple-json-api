import React, {Component} from 'react';
import Apple from './components/Apple';
import Banana from './components/Banana';
import Car from './components/Car';
import Lime from './components/Lime';
import Orange from './components/Orange';
import Papaya from './components/Papaya';

class App extends React.Component {

   

  render() {
    
    return (
      <div>
        <Apple />
        <Banana />
        <Car />
        <Lime />
        <Orange />
        <Papaya />
      </div>
    );
  }
  
}

export default App;
