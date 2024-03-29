import React from 'react';
import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from "./Components/ResponsiveAppBar";
import AboutMe from "./Components/AboutMe";
import Experience from "./Components/Experience";

function App() {
    return (
        <div className="App">
            <ResponsiveAppBar></ResponsiveAppBar>
            <AboutMe></AboutMe>
            <Experience></Experience>
            <AboutMe></AboutMe>
            <AboutMe></AboutMe>
        </div>
    );
}

export default App;
