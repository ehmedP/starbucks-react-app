import React from 'react';
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <nav className='nav'>
            <div className='nav__holder'>
                <div className='logo-box'>
                    <img src="logo.png" alt="logo" />
                </div>
                <div className='navbar-wrapper'>
                    <div className='navbar-left'>
                        <ul className='navbar-list'>
                            <li className='navbar-list__item navbar-list__menu'>
                                <div className='list-item__holder'>
                                    <NavLink className='navbar-item__link' to="/rewards">
                                        <span>MENU</span>
                                    </NavLink>
                                </div>
                            </li>
                            <li className='navbar-list__item navbar-list__rewards'>
                                <div className='list-item__holder'>
                                    <NavLink className='navbar-item__link' to="/menu">
                                        <span>REWARDS</span>
                                    </NavLink>
                                </div>
                            </li>
                            <li className='navbar-list__item navbar-list__gift-cards'>
                                <div className='list-item__holder'>
                                    <NavLink className='navbar-item__link' to="/gift">
                                        <span>GIFT CARDS</span>
                                    </NavLink>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='navbar-right'>
                        <div className='navbar-join__holder'>
                            <ul className='navbar-join__list'>
                                <li className='navbar-join__item navbar-join__location'>
                                    <div className='join-item__holder'>
                                        <NavLink className='join-item__link' to="/store-locator">
                                            <span>
                                                <span className='join-location-icon'>
                                                    <svg
                                                        aria-hidden="true"
                                                        className="valign-middle pr2"
                                                        focusable="false"
                                                        preserveAspectRatio="xMidYMid meet"
                                                        style={{ width: '32px', height: '32px', overflow: 'visible', fill: 'currentColor' }}
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path d="M12,11.475 C10.5214286,11.475 9.32142857,10.299 9.32142857,8.85 C9.32142857,7.401 10.5214286,6.225 12,6.225 C13.4785714,6.225 14.6785714,7.401 14.6785714,8.85 C14.6785714,10.299 13.4785714,11.475 12,11.475 M12,1.5 C7.85357143,1.5 4.5,4.7865 4.5,8.85 C4.5,14.3625 12,22.5 12,22.5 C12,22.5 19.5,14.3625 19.5,8.85 C19.5,4.7865 16.1464286,1.5 12,1.5"></path>
                                                    </svg>
                                                </span> 
                                                <span className='join-location-text'>Find a store</span>
                                            </span>
                                        </NavLink>
                                    </div>
                                </li>
                                <li className='navbar-join__item navbar-join__sign'>
                                    <div className='join-item__holder'>
                                        <NavLink to="/account/signin">
                                            <span>Sign in</span>
                                        </NavLink>
                                    </div>
                                </li>
                                <li className='navbar-join__item navbar-join__login'>
                                    <div className='join-item__holder'>
                                        <NavLink to="/account/create">
                                            <span>Join now</span>
                                        </NavLink>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;