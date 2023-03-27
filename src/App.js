import { Route, Routes } from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import { ApplicationViews } from "./Components/views/ApplicationViews";
import { NavBar } from "./Components/NavBar/NavBar";

function App() {
  return (
    <Routes >
      <Route path="*" element={
        <>
        <NavBar />
        <ApplicationViews />
        </>
      } />
        
    </Routes>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
