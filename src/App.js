import React, { useState, useEffect } from "react";
import { initializeReactGA } from './components/GoogleAnalytics.js';

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
import Contact from './pages/Contact'
import SmiseArtboards from "./pages/SmiseArtboards";
import './index.css'
import './styles/Background.css'
import moon from './assets/moon-simple.png'
import DNA from './assets/DNA-for-portfolio.png'
import myLogo from './assets/kaylacasale-logo.png'
import myLogoPartOne from './assets/mylogo-part-one.png'
import myLogoPartTwo from './assets/mylogo-part-two.png'

import testTumble from './assets/test-tumble.png';
import BackgroundCircles from "./components/BackgroundCircles";
// import BackgroundTwo from "./components/BackgroundTwo";

// const styles = {
//   Background: {
//     backgroundRepeat: 'repeat-y'
//   }
// }

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': 'b9ab6f30f2mshc158b857771ac33p1c7625jsnbcdb136ab6b3',
//     'X-RapidAPI-Host': 'us-gun-laws.p.rapidapi.com'
//   }
// };

// fetch('https://us-gun-laws.p.rapidapi.com/states', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));


//   const fetch = require('node-fetch');

// const url = 'https://api-basketball.p.rapidapi.com/timezone';

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': 'b9ab6f30f2mshc158b857771ac33p1c7625jsnbcdb136ab6b3',
//     'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error('error:' + err));

// var express = require('express');
// var app = express();
// var http = require('http');
// var router = express.Router();

// module.exports = (app) => {

//   /* GET league tables */
//   app.get('/api/:term', function (req, res, next) {

//     var apiKey = process.env.API_KEY;

//     let url = "http://api.football-data.org/v2/competitions/BL1/standings"; // + req.params.term + "/standings";

//     const options = {
//       method: 'GET',
//       headers: {
//         'X-RapidAPI-Key': 'b9ab6f30f2mshc158b857771ac33p1c7625jsnbcdb136ab6b3',
//         'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
//       }
//     };

//     fetch('https://api-basketball.p.rapidapi.com/timezone', options)
//       .then(response => response.json())
//       .then(response => console.log(response))
//       .catch(err => console.error(err));

//     var getReq = http.request(options, function (res) {
//       console.log("Connected");
//       res.on('data', function (data) {
//         console.log(data);
//       });
//     });

//     getReq.end();

//   })


//   app.get('/api', function (req, res, next) {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.end('Now add a search term to the end of the URL in the address bar');

//   })
// }



// var myHeaders = new Headers();
// myHeaders.append("x-rapidapi-key", "b9ab6f30f2mshc158b857771ac33p1c7625jsnbcdb136ab6b3");
// myHeaders.append("x-rapidapi-host", "v1.basketball.api-sports.io");

// var requestOptions = {
//   method: 'GET',
//   headers: myHeaders,
//   redirect: 'follow'
// };

// fetch("https://v1.basketball.api-sports.io/{endpoint}", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));



import axios from 'axios';
// import { useState } from 'react';

// function App() {
// const [data, setData] = useState(null);

// useEffect(() => {
//   const fetchData = async () => {
//     const headers = {
//       'x-rapidapi-key': 'b9ab6f30f2mshc158b857771ac33p1c7625jsnbcdb136ab6b3',
//       'x-rapidapi-host': 'v1.basketball.api-sports.io"',
//     };
//     const endpoint = '{endpoint}'; // replace with the actual endpoint
//     const response = await axios.get(`https://v1.basketball.api-sports.io/${endpoint}`, { headers });
//     setData(response.data);
//   };

//   fetchData();
// }, []);

// // Display the data in the console
// console.log(data);

// return (
//   <div>
//     <h1>API Data</h1>
//     {/* Display the data in Postman */}
//     {data && <textarea readOnly value={JSON.stringify(data)} rows={10} cols={50} />}
//   </div>
// );
// }


function App() {
  const [timezones, setTimezones] = useState([]);

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'b9ab6f30f2mshc158b857771ac33p1c7625jsnbcdb136ab6b3',
      'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
    }
  };
  const bets = 'bets'

  fetch(`https://api-basketball.p.rapidapi.com/${bets}`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .then(data => {
      const americaTimezones = data.response.filter(tz => tz.startsWith('America/'));
      setTimezones(americaTimezones);
      console.log(data)
      function seeBets() {
        return (
          <div>
            data
          </div>
        )
      }
    })
    .catch(err => {
      console.error(err)

    });

  useEffect(() => {
    initializeReactGA();
  }, []);

  // const options = {
  //   method: 'GET',
  //   url: 'https://api-basketball.p.rapidapi.com/timezone',
  //   headers: {
  //     'X-RapidAPI-Key': 'b9ab6f30f2mshc158b857771ac33p1c7625jsnbcdb136ab6b3',
  //     'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
  //   }
  // };

  // axios.request(options).then(function (response) {
  //   console.log(response.data);
  // }).catch(function (error) {

  //   console.error(error);
  // });

  // const [timezones, setTimezones] = useState([]);

  // const options = {
  //   method: 'GET',
  //   headers: {
  //     'X-RapidAPI-Key': 'b9ab6f30f2mshc158b857771ac33p1c7625jsnbcdb136ab6b3',
  //     'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
  //   }
  // };

  // fetch('https://api-basketball.p.rapidapi.com/timezone', options)
  //   .then(response => response.json())
  //   .then(response => {
  //     console.log(response)
  //     console.log(response[100])
  //   })
  //   .catch(err => console.error(err));
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const headers = {
  //       'x-rapidapi-key': 'b9ab6f30f2mshc158b857771ac33p1c7625jsnbcdb136ab6b3',
  //       'x-rapidapi-host': 'v1.basketball.api-sports.io',
  //     };
  //     const endpoint = '{endpoint}'; // replace with the actual endpoint
  //     const response = await axios.get(`https://v1.basketball.api-sports.io/${endpoint}`, { headers });
  //     setData(response.data);
  //   };

  //   fetchData();
  // }, []);
  // // const currentUrl = window.location.href;

  // // Display the data in the console
  // console.log(data);
  return (
    <>

      <style>
        @import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Lato:wght@300&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Gravitas+One&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Climate+Crisis&display=swap');
      </style>

      <div className="App" style={{ fontFamily: 'Gravitas One' }}>
        <div >
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

        {/* <div style={{ zIndex: 8 }}>
          <div className="moon">
            <img src={testTumble}></img>
          </div>
          <div className="logo">
            <img src={testTumble}></img>
          </div>
        </div> */}
        {/* <div>
          <Background />
        </div> */}
        {/* <div>
          <h2>Timezones in America</h2>
          <ul>
            {timezones.map(tz => <li>{tz}</li>)}
          </ul>
        </div> */}
        <BackgroundCircles />
        {/* <BackgroundTwo /> */}
        <AnimatedCursor
          color="255, 105, 180"
        />
        {/* <div>
          <button >
            bets
          </button>
        </div> */}

        <div className="container">
          <Background />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/smise-artboards' element={<SmiseArtboards />} />
            {/* <Route path="/skills/project" element={<Project />} /> */}
          </Routes>

          {/* <Link to="/" elemen t={<Home />} /> */}
        </div>
        {/* <div style={{ zIndex: 8 }}>
          <div className="tumble" id='rotate'>
            <img src={testTumble}></img>
          </div>
          <div className="logo">
            <img src={testTumble}></img>
          </div>
        </div> */}


        <footer id='wiggle'>
          Designed & Built by <span><a href="https://github.com/kaylacasale" style={{ color: '#6CDDF4' }}>Kayla Casale</a></span> in React
        </footer>

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