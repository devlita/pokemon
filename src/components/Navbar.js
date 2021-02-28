import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import logo from '../images/Pokemon-Logo.png'

const Navbar = () => {
    const pathName = useLocation().pathname;

    return (
        <Topbar>
            <Link to="/pokemon">
                <Logo src={logo} alt="Pokemon" />
            </Link>
            <NavLink>
                <Link 
                    to="/pokemon" 
                    className={pathName === "/pokemon" ? "active" : ""}
                >
                    Pokemon
                </Link>
                <Link 
                    to="/my-pokemon"
                    className={pathName === "/my-pokemon" ? "active" : ""}
                >
                    My Pokemon
                </Link>
            </NavLink>
        </Topbar>
    )
}

const Topbar = styled.nav`
    padding: 0.5rem 1rem;
    position: fixed;
    top: 0;
    width: 100vw;
    height: 3rem;
    background-color: #CC2020;
    margin: 0 auto;
    align-items: center;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
`;

const Logo = styled.img`
  height: 2rem;
`;

const NavLink = styled.div`
    a {
        font-size: 1.2rem;
        text-decoration: none;
        margin: 0 1rem;
        color: #F1F1F1;
    }
    a:hover {
        color: #FFFFFF;
    }
    .active {
        color: #FFFFFF;
        border-bottom: 2px solid #FFCB05
    }
    @media screen and (max-width: 960px) {
        a {
            font-size: 0.8rem;
        }
    }
`;

export default Navbar