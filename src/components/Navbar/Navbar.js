import React from 'react';
import styles from './navbar.module.css';
import cx from 'classnames';

export const Navbar = () => {
  return (
    <nav className={cx(styles.bg, 'navbar navbar-expand-lg bg-body-tertiary')}>
      <div className={cx(styles.nav_container, 'container-fluid')}>
        <a className="navbar-brand" href="#">
          {/* <img
            src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo.svg"
            alt="Bootstrap"
            width="50"
            height="44"
          /> */}
          <h1 className={styles.nav_link}>Logo</h1>
        </a>

        <div className={styles.navbar_items} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className={cx(styles.nav_link, 'nav-link active')}
                aria-current="page"
                href="#"
              >
                Menus
              </a>
            </li>
            <li className="nav-item">
              <a className={cx(styles.nav_link, 'nav-link')} href="#">
                Private Dining
              </a>
            </li>
            <li className="nav-item">
              <a className={cx(styles.nav_link, 'nav-link')} href="#">
                Reservations
              </a>
            </li>
            <li className="nav-item">
              <a className={cx(styles.nav_link, 'nav-link')}>Gift Cards</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
