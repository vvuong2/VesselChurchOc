import React from 'react';
import { Link } from 'react-router-dom';

function SiteNav() {
  return (
    <>
    <nav 
     className="navbar navbar-expand-md navbar-dark bg-dark"
     aria-label="Fourth navbar example"
    >
      <div className='collapse navbar-collapse' id='navbarsExample04'>
        <ul className='navbar-nav me-auto mb-2 mb-md-0'>
          <li className='nav-item'>
            <Link
              to='/'
              id='pgHome'
              data-page='/'
              type='button'
              className='nav-link px-2 text-white link-button'
              // onClick={goToPage}
            >
              Home
            </Link>
          </li>
        </ul>
      </div>
      </nav>
    </>
  );
}
export default SiteNav;
