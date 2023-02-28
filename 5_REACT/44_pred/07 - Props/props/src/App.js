import React from 'react';
import './App.css';
import { PropsComponent, ClassComponent, FunctionalComponent } from './Components';

class App extends React.Component() {
  render() {
    return (
      <div>
        <ClassComponent />
        <FunctionalComponent />
        <PropsComponent />
      </div>
    );
  }
}

export default App;
