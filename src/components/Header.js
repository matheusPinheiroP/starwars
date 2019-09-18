import React, { Component } from 'react';

import logo from '../images/logo.png';
import styled from 'styled-components';

//Ignore for now.

//import { Icon } from 'react-icons-kit';
//import {ic_keyboard_arrow_right} from 'react-icons-kit/md/ic_keyboard_arrow_right'
//import { NavLink, Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <HeaderComponent className="header-container">
                <div className="header-top">
                    <Logo src={logo} />
                </div>
                {/* Header componentes */}
                <div className="header-content">
                    <Title>Saudades de Star Wars?</Title>
                    <Subtitle>Bem, nós também estamos. Vamos recordar!</Subtitle>
                </div>
            </HeaderComponent>
        );
    }
}

export default Header;

//Logo 
const Logo = styled.img`
  width: 15rem;
  height: 2.0rem;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);  

`;

//Header Container 1.
const HeaderComponent = styled.div`
  .seeMore-btn {
       right: 0;
       margin: 1.125rem 3% 0;
       padding: 0.4375rem 1.0625rem;
       font-weight: 400;
       line-height: normal;
       border-radius: 0.1875rem;
       font-size: 1rem;
       background: var(--main-red);
       position: absolute;
       translate: transform(-50%, -50%);
       cursor: pointer;
       transition: background 0.2s ease-in;
       &:hover {
           background: var(--main-red-hover);
       }
  }

  .Icon svg {
      vertical-align: bottom;
      margin-left: 1.5rem;
  }

  .header-top {
      position: relative;
      height: 10rem;
      z-index: 1;
  }

  //Header Content
  .header-content {
      width: 65%;
      position: relative;
      margin: 3.5rem auto 0;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      flex-direction: column;
      z-index: 1;
  }

  //people-info-btn
  .people-info-btn {
      display: inline-block; 
      background: var(--main-red);
      border: none;
      outline: none;
      margin: 0 33%;
      padding: 1.5rem;
      border-radius: 0.1875rem;
      font-size: 2rem;
      text-aling: center;
      box-shadow: 0 1px 0 rgba(0,0,0,0.45);
      transition: background 0.2s ease-in;
      cursor: pointer;
      text-transform: uppercase;
  }
`;

//Main Title
const Title = styled.h1`
  margin: 0 0 1.2rem;
  font-size: 5rem;
  font-weight: 650;
  line-height: 1.1em;
`;

//Subtitle
const Subtitle = styled.h2`
  font-weight: 400;
  font-size: 1.875rem;
  line-height: 1.25rem;
  margin: 0 0 1.875rem;
`;