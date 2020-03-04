import React from 'react';
import {Link} from 'react-router-dom';

import '../../styles/navbar.css';
import SearchBar from '../searchBar/SearchBar';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar__list'>
        <Link className='link' to='/'>
          Home
        </Link>
        <Link className='link' to='/picturelist'>
          Photos
        </Link>
        <Link className='link' to='/logout'>
          Logout
        </Link>
      </div>

      <div className='navbar-search'>
        <SearchBar />
      </div>
    </div>
  );
};
export default Navbar;
