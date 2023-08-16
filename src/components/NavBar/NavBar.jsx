import React, { useState } from 'react'
import {
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';


const NavBar = () => {

  

  return (
    <div className=' h-14 flex justify-between items-center px-4 py-3 shadow'>
      <section className='logo w-40'>
        <img src="/img/logo.svg" alt="" />
      </section>

      <section className='list'>
        <Nav
          pills
        >
          <NavItem>
            <NavLink
              active
              href="#"
            >
              Notas
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">
              Pomodoro
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#"
            >
              Info+
            </NavLink>
          </NavItem>
        </Nav>

      </section>
    </div>
  );
}

export default NavBar