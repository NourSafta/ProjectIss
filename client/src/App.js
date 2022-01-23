import './App.css';
import React,{useState} from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require('../src/PMS-logo.png')} alt=""/>
        <p>
          Welcome to Project Management System
        </p>
      
        <form>
         <label>Enter the courses for each cohort:</label>
         <input type="text"></input>
         <label>Enter the classrooms:</label>
         <input type="text"></input>
         </form>

        
        <a
          /*className="App-link"*/
          href="schedule.js"
          /*target="_blank"
          rel="noopener noreferrer"*/
        >
          <button class="button">View schedule</button>
        </a>
      </header>
    </div>
  );
}

export default App;
