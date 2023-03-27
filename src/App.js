import { Route, Routes } from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import { ApplicationViews } from "./Components/views/ApplicationViews";
import { NavBar } from "./Components/NavBar/NavBar";

export const App = () => {
  return (
    <Routes >
      <Route path="*" element={
        <>
        <NavBar />
        <ApplicationViews />
        </>
      } />
        
    </Routes>
  );
}

