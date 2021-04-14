import React ,{useState , useEffect}from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink} from './Navbarelements'
import {IconContext} from 'react-icons/lib'
const Navbar = ( {toggle}) => {

   const [scrollNav,setScrollNav] =useState(false)

   const changeNav = () => {

     if(window.scrollY >= 80){

        setScrollNav(true)

     }else{

        setScrollNav(false)
     }

   }

   useEffect (() => {

    window.addEventListener('scroll',changeNav)

   },[])

    return (
       <>
       <IconContext.Provider value={{color:'white'}}>
          <Nav scrollNav={scrollNav}>
              <NavbarContainer>
                  <NavLogo to='home'>Solar System</NavLogo>
                  <MobileIcon onClick={toggle}>
                      <FaBars/>
                  </MobileIcon>
                  <NavMenu>
                      <NavItem>
                          <NavLinks to='about '>About</NavLinks>
                     </NavItem>
                     <NavItem>
                          <NavLinks to='discover'>Discover</NavLinks>
                     </NavItem>
                     <NavItem>
                          <NavLinks to='services'>Events</NavLinks>
                     </NavItem>
                     <NavItem>
                          <NavLinks to='sign-up'>sign up</NavLinks>
                     </NavItem>
                  </NavMenu>
                  <NavBtn>
                      <NavBtnLink to="/signin">Sign In</NavBtnLink>
                  </NavBtn>
              </NavbarContainer>
          </Nav>
          </IconContext.Provider>

       </>
    )
}

export default Navbar
