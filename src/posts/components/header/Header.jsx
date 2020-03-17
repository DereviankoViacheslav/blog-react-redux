import './Header.scss';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="header__logo">My Blog</Link>
      <nav className="header__navigation">
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="/" className="navigation__item-link">All posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;