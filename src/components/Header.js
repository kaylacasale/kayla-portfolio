import React from 'react';
import { Link } from 'react-router-dom';
// Here we import the Header.css file to grant access to some additional classNames
import '../styles/Header.css';
import "fontsource-cascadia-code"

// TODO: Create a styles object called "styles"

// const styles = {
//   header: {
//     background: 'red',
//     // background: '#b71775',
//     // height: '200px',
//   },
//   h1: {
//     // margin: 0,
//     // paddingTop: '75px',
//     // textAlign: 'center',
//     // color: 'white',
//     fontSize: '100px'
//   }
// }



function Header() {
  // TODO: Add a style attribute to header and the h1 element

  return (
    <header style={{ fontFamily: 'Cascadia Code' }}>
      <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-lg px-3">
        <a class="navbar-brand" href="/">Kayla Casale</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About Me</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/portfolio">Portfolio</a>
              {/* <Link to="/portfolio" class="nav-link" href="/portfolio">Portfolio</Link> */}
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown link
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>

    </header>
  );
}

export default Header;
