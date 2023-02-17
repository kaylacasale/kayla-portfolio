import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Navbar from "./components/Navbar";
import AnimatedCursor from "react-animated-cursor";
// import Head from "./components/Head";
import Background from "./components/Background"
import { Helmet } from "react-helmet"

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Kayla's Portfolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Comfortaa&family=Lato:wght@300&family=Lobster&family=Roboto:wght@100&family=Rubik+Microbe&display=swap" rel="stylesheet"></link>
      </Helmet>
      <Background />
      <AnimatedCursor />
      <Navbar />
      <Header />
      <Section />
    </div>
  );
}

export default App;

//* install and import animated cursor
//* install and import npm react-helmet (substitutes <head> tag in react)
//* install and import npm webkit ('npm i webkit-npm`)
// https://www.npmjs.com/package/webkit-npm