import React from 'react';
// Here we import the Header.css file to grant access to some additional classNames
import '../styles/Header.css';

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
    <header>
      <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-lg px-3">
        <a class="navbar-brand" href="/">Portfolio</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About Me</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">My Work</a>
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
