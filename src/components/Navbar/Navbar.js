import React from 'react';
import './Navbar.css';

export const Navbar = () => {
  return (
    <div className='navbar container-fluid'>
            <span className='navLeft'>
             <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix-logo"/>
             <p>Home</p>
             <p>TV Shows</p>
             <p>Movies</p>
             <p>Recently Added</p>
             <p>My List</p>
             
            </span>
            <span className='navRight'>
            <i class="bi bi-search"></i>
            <p>Kids</p>
            <p>DVD</p>
            <i class="bi bi-bell-fill"></i>
                <img className="avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"/>
            </span>
    </div>
  )
}
