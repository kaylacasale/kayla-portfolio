import React from "react";
import $ from 'jquery';

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
import Skills from './pages/Skills'
import SmiseArtboards from "./pages/SmiseArtboards";
import './index.css'
import './styles/Background.css'
import moon from './assets/moon-simple.png'
import DNA from './assets/DNA-for-portfolio.png'
import myLogo from './assets/kaylacasale-logo.png'
import myLogoPartOne from './assets/mylogo-part-one.png'
import myLogoPartTwo from './assets/mylogo-part-two.png'

// import BackgroundTwo from "./components/BackgroundTwo";

// const styles = {
//   Background: {
//     backgroundRepeat: 'repeat-y'
//   }
// }
function App() {
  return (
    <>

      <style>
        @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Lato:wght@300&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Gravitas+One&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Climate+Crisis&display=swap');
      </style>

      <div className="App" style={{ backgroundImage: `url(${Background})`, fontFamily: 'Gravitas One' }}>
        <div>
          <Header />
        </div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav> */}
        <Helmet>
          <title>Kayla's Portfolio</title>
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin></link>
          <link href="https://fonts.googleapis.com/css2?family=Comfortaa&family=Lato:wght@300&family=Lobster&family=Roboto:wght@100&family=Rubik+Microbe&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Climate+Crisis&display=swap" rel="stylesheet"></link>


          {/* <link rel="stylesheet" type="text/css" href="index.css" /> */}
        </Helmet>
        {/* <div>
          <div className="moon">
            <img src={myLogoPartOne}></img>
          </div>
          <div className="logo">
            <img src={myLogoPartTwo}></img>
          </div>
        </div> */}
        {/* <div>
          <Background />
        </div> */}

        {/* <BackgroundTwo /> */}
        <AnimatedCursor
          color="255, 105, 180"
        />

        <div className="container">
          <Background />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/skills" element={<Skills />} />
            <Route path='/smise-artboards' element={<SmiseArtboards />} />
            {/* <Route path="/skills/project" element={<Project />} /> */}
          </Routes>

          {/* <Link to="/" element={<Home />} /> */}
        </div>


        {/* <Section /> */}
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
//* 'npm i @mui/icons-material'
//* 'npm i react-native-shadow'
//* 'npm i @babel/runtime'
//* 'npm i react-spring'
//* npm i react-use-gesture'

// react moving text link below
// https://yidaoj.github.io/react-moving-text/
//* 'npm i react-moving-text'
//* 'mdb-react-ui-kit'

// react animate (home) - about me
// https://www.npmjs.com/package/react-type-animation
//* 'npm install --save react-type-animation'

//* 'npm i three'
//* npm install three @react-three/fiber
//* npm install @react-three/drei
//* npm i react-carousel3
//* npm i react-bootstrap-carousel
//* 'npm i react-slider'

//* 'npm i rc-slider'
//* npm i fontsource-cascadia-code

//* npm install react-icons --save