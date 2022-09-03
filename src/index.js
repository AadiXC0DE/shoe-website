import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Navbar extends React.Component {
  
  render() {
    return(
      <nav>
        <h2>Ham</h2>
        <h1>Overtime Kicks</h1>
        <ul>
          <li> Search </li>
          <li> Cart </li>
        </ul>
      </nav>
    );
  }
}


ReactDOM.render(<Navbar /> , document.getElementById("root"));