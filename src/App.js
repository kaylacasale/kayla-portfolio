import React from "react";
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from '@apollo/client'
// import { setContext } from '@apollo/client/link/context'
// import { BrowserRouter as Routes, Router, Route } from 'react-router-dom'
import { Route, Routes } from "react-router-dom"
import { Link } from 'react-router-dom'
import Header from "./components/Header";
import Section from "./components/Section";
// import Navbar from "./components/Navbar";
import AnimatedCursor from "react-animated-cursor";
// import Head from "./components/Head";
import Background from "./components/Background"
import { Helmet } from "react-helmet"
// import { animations } from 'react-animations'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'


function App() {
  return (
    <>

      <div className="App">
        <Header />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Helmet>
          <title>Kayla's Portfolio</title>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
          <link href="https://fonts.googleapis.com/css2?family=Comfortaa&family=Lato:wght@300&family=Lobster&family=Roboto:wght@100&family=Rubik+Microbe&display=swap" rel="stylesheet"></link>
        </Helmet>
        <Background />
        <AnimatedCursor />

        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>

          {/* <Link to="/" element={<Home />} /> */}
        </div>


        <Section />
      </div>
    </>
  );
}

export default App;

//* install and import animated cursor
//* install and import npm react-helmet (substitutes <head> tag in react)
//* install and import npm webkit ('npm i webkit-npm`)
// https://www.npmjs.com/package/webkit-npm
//* install npm react animation ('npm i react-animation')
// https://www.npmjs.com/package/react-animation
//* 'npm i bootstrap'
//* install react-router-dom npm package to route dynamically ('npm i react-router-dom')
// https://www.npmjs.com/package/react-router-dom
//* 'npm i react-dom'
//* 'npm i react-bootstrap'
//* 'npm install react-bootstrap bootstrap'
//* 'npm install @mui/material @emotion/react @emotion/styled'