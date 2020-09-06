import React from 'react';
import Nav from './components/nav/Nav'
import './App.css';
import './reset.css'
import routes from './routes'



function App() {
  return (
    <div className="App">
      <Nav/>
      {routes}
    </div>
  );
}

export default App;
