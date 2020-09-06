import React from 'react';
import Nav from './components/nav/Nav'
import './App.css';
import './reset.css'
// import Auth from './components/auth/Auth';
import routes from './routes'
// import About from './components/about/About'


function App() {
  return (
    <div className="App">
      <Nav/>
      {/* <Auth/> */}
      {routes}
      {/* <About /> */}
      <h1>WORKING</h1>
    </div>
  );
}

export default App;
