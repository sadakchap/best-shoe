import React, { useState } from 'react'
import { MenuWrapper, NavbarWrapper, NavItemLink, NavList, NavListItem, NavLogoLink } from './NavbarElements';
import { BiMenuAltRight } from 'react-icons/bi';
import { TiTimes } from 'react-icons/ti'
import { isAuth, signout } from '../../auth/helpers/auth';
import { useHistory } from 'react-router-dom';
import { PrimaryButton } from '../../reuseableComponents/Buttons';
import { GiVileFluid } from 'react-icons/gi';

const Navbar = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const history = useHistory();
    const curUser = isAuth();

    const toggleNav = () => setIsNavOpen(!isNavOpen);

    const handleSignout = (e) => {
        e.preventDefault();
        signout(() => { 
            history.push('/signin');
        });
    }
    
    const changeBackground = () => {
        if(window.scrollY >= 60){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return (
        <>
            <NavbarWrapper className={navbar && 'navbar active'}>
                <NavLogoLink to="/" ><GiVileFluid/> <span>Best shoe</span> </NavLogoLink>
                <NavList isOpen={isNavOpen}>
                    <NavListItem>
                        <NavItemLink to="/cart">Cart</NavItemLink>
                    </NavListItem>
                    { curUser ? (
                        <>
                            <NavListItem>
                                <NavItemLink to="/user/dashboard">Dashboard</NavItemLink>
                            </NavListItem>
                            {curUser.user.role === 1 && (
                                <NavListItem>
                                    <NavItemLink to="/admin/dashboard">A. Dashboard</NavItemLink>
                                </NavListItem>
                            )}
                            <NavListItem>
                                <NavItemLink to="/signout" onClick={handleSignout} >sign out</NavItemLink>
                            </NavListItem>
                        </>
                    ) : (
                        <>
                            <NavListItem>
                                <NavItemLink to="/signin">Sign in</NavItemLink>
                            </NavListItem>
                            <NavListItem>
                                <NavItemLink to="/signup"><PrimaryButton width="100px">Sign Up</PrimaryButton></NavItemLink>
                            </NavListItem>
                        </>
                    )}
                </NavList>
                <MenuWrapper>
                    { isNavOpen ? (
                        <TiTimes size="1.5rem" style={{ cursor: "pointer" }} onClick={toggleNav} />
                    ) : (
                        <BiMenuAltRight size="1.5rem" style={{ cursor: "pointer" }} onClick={toggleNav} />
                    )}
                    
                </MenuWrapper>
            </NavbarWrapper>
        </>
    )
}

export default Navbar
