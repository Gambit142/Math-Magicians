import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationLinks = () => {
  const links = [
    {
      id: 1,
      linkName: 'Home',
      path: '/',
    },
    {
      id: 2,
      linkName: 'Calculator',
      path: '/calculator',
    },
    {
      id: 3,
      linkName: 'Quote',
      path: '/quote',
    },
  ];

  return (
    <>
      <div>
        <h1>Math Magicians</h1>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                activeClassName="nav-link"
                exact
              >
                {link.linkName}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavigationLinks;
