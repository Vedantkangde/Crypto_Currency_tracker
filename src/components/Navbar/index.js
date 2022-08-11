import React ,{useState , useEffect}from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink} from './Navbarelements'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll} from 'react-scroll'
import { StyledFirebaseAuth } from 'react-firebaseui'
//import fire from '../login system/firebase' 
import firebase from 'firebase'
const Navbar = ( {toggle,isSignedIn,uiConfig}) => {

   const [scrollNav,setScrollNav] =useState(false)
   const alert = () => {

    alert("sign in first")

   }
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

   const toggleHome = () => {

    scroll.scrollToTop();
   }
    return (
       <>
       <IconContext.Provider value={{color:'white'}}>
          <Nav scrollNav={scrollNav}>
              <NavbarContainer>
                  <NavLogo to='/' onClick={toggleHome}>Solar System</NavLogo>
                  <MobileIcon onClick={toggle}>
                      <FaBars/>
                  </MobileIcon>
                 
                  {isSignedIn ? (
                     <>

<NavMenu>
<NavItem>
    <NavLinks to='about'
    smooth={true} duration={500} spy ={true} exact='true' offset={-80} >About</NavLinks>
</NavItem>
<NavItem>
    <NavLinks to='apod' smooth={true} duration={500} spy ={true} exact='true' offset={-80} >APOD</NavLinks>
</NavItem>

<NavItem>
    <NavLinks to='services' smooth={true} duration={500} spy ={true} exact='true' offset={-80} >Events</NavLinks>
</NavItem>
<NavItem>
    <NavLinks to='weather' smooth={true} duration={500} spy ={true} exact='true' offset={-80} >Weather</NavLinks>
</NavItem>
</NavMenu>
                        
                        
                        <NavBtnLink>
                        <NavBtn onClick={() => firebase.auth().signOut()}> Sign out! </NavBtn>
                        <h1>
                            
                        </h1>
                        </NavBtnLink>
                                
                                 
</>
                           
                  ) : (
                     <>
                     <NavMenu>
<NavItem>
    <NavLinks to=''
    smooth={true} duration={500} spy ={true} exact='true' offset={-80} >About</NavLinks>
</NavItem>
<NavItem>
    <NavLinks to='' smooth={true} duration={500} spy ={true} exact='true' offset={-80}>APOD</NavLinks>
</NavItem>

<NavItem>
    <NavLinks to='' smooth={true} duration={500} spy ={true} exact='true' offset={-80}>Events</NavLinks>
</NavItem>
<NavItem>
    <NavLinks to='' smooth={true} duration={500} spy ={true} exact='true' offset={-80} >Weather</NavLinks>
</NavItem>

</NavMenu>

                    <StyledFirebaseAuth
                    uiConfig={uiConfig}
                    firebaseAuth={firebase.auth() }
                    
                  />
                  </>
                  ) 
                  }
              </NavbarContainer>
          </Nav>
          </IconContext.Provider>

       </>
    )
}

export default Navbar
