import React, { useState } from 'react'
import {
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
  NavbarToggler,
  Collapse,
} from 'reactstrap';

import "./NavBar.css"


const NavBar = () => {

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);



  return (
    <div className=' navBar h-14 flex justify-between items-center px-4 py-3 shadow'>
      <section className='logo w-40'>
        <img className='logoDefault' src="/img/logo.svg" alt="" />
        <img className='logoMobile' src="/img/logoToDoList.svg" alt="" />
      </section>

      <section className='list'>
        <Nav
          className='flex-nowrap'
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
              className='px-0'
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