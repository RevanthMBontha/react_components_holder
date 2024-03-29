import React from 'react';
import './header.css';

const Header = () => {
  // Change Background Header
  window.addEventListener('scroll', function () {
    const header = this.document.querySelector('.header');
    if (this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
  });

  // isMenuVisible Menu

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Revanth Bontha
        </a>

        <div className="nav__menu">
          <ul className="nav__list ">
            <li className="nav__item">
              <a href="https://revanthmbontha.github.io/" className="nav__link">
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="https://revanthmbontha.github.io/#about"
                className="nav__link"
              >
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="https://revanthmbontha.github.io/#skills"
                className="nav__link"
              >
                <i className="uil uil-file-alt nav__icon"></i>Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="https://revanthmbontha.github.io/#qualifications"
                className="nav__link"
              >
                <i className="uil uil-file-alt nav__icon"></i>Qualifications
              </a>
            </li>

            <li className="nav__item">
              <a
                href="https://revanthmbontha.github.io/#portfolio"
                className="nav__link"
              >
                <i className="uil uil-scenery nav__icon"></i>Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a
                href="https://revanthmbontha.github.io/#contact"
                className="nav__link"
              >
                <i className="uil uil-message nav__icon"></i>Contact
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav__close"></i>
        </div>

        <div className="nav__toggle">
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
