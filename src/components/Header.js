import React from 'react';
import { Link } from 'react-router-dom';
// Here we import the Header.css file to grant access to some additional classNames
import '../styles/Header.css';
import "fontsource-cascadia-code";
import myLogoTwo from '../assets/my-logo-2.png';
import myLogoLight from '../assets/my-logo-light.png';
import myAtomIcon from '../assets/my-atom-icon.png';
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
// const styles = {
//   header: {
//     fontFamily: 'Climate Crisis'
//   }
// }


function Header() {
  // TODO: Add a style attribute to header and the h1 element

  return (
    <header style={{ fontFamily: 'Gravitas One' }}>
      <nav class="navbar navbar-expand-lg shadow-lg px-3" style={{ backgroundColor: '#C7C6D5' }}>
        <div id='canvas'>
          <div id='circle'>
            <img className='my-logo' id='wiggle' src={myAtomIcon} style={{ boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)', borderRadius: '50px' }}></img>
            <Link to='/'><div id='ball-1' class='ball' style={{ zIndex: '3' }}>KC</div></Link>
            <Link to='/'><div id='ball-2' class='ball' style={{ zIndex: '2' }}>About</div></Link>
            <Link to='/contact' ><div id='ball-3' class='ball' style={{ zIndex: '2' }}>Contact</div></Link>
            <Link to='/portfolio'><div id='ball-4' class='ball' style={{ zIndex: '2' }}>Skills</div></Link>
            <Link to='/skills'><div id='ball-5' class='ball' style={{ zIndex: '2' }}>Work</div></Link>
            {/* include Contact section */}
            {/* <div id='ball-6' class='ball'>6</div> */}
          </div>
        </div>
        {/* <a class="navbar-brand" id="wiggle" href="/" style={{ color: 'white' }}>Kayla Casale</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button> */}
        {/* <div class="collapse navbar-collapse" id="navbarNavDropdown">
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
        {/* </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown link
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div> */}
        {/* </li>
          </ul>
        </div>  */}
      </nav>

    </header>
  );
}

export default Header;
