import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Background from './components/Background';
// import ReactDOMClient from 'react-dom/client'
// import { createRoot } from 'react-dom/client'

// const root = ReactDOMClient.createRoot(document.getElementById("root"))
// root.render(
//     <React.StrictMode>
//         <BrowserRouter>
//             <App />
//         </BrowserRouter>
//     </React.StrictMode>
// )

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
    , document.getElementById('root'));

//* installed and imported animated cursor in App.js 2/16/23
// https://www.npmjs.com/package/react-animated-cursor#-features