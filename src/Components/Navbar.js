import React, {useState} from 'react'
//import { firebase } from './Firebase'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'
//import {auth , provider}  from './Firebase.js';
import {signInWithGoogle,signout} from './Firebase'
//import {firebase} from 'firebase'
const Navbar = ({isSigned,setIssigned}) => {
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)


    return (
        <div className='header'>
            <div className='container'>
                <h1>Cr<span className='primary'>ypto</span></h1>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <a href='/'>Home</a>
                    </li>
                    <li>
                        <a href='/'>Featured</a>
                    </li>
                    <li>
                        <a href='/'>Contact</a>
                    </li>
                </ul>
                <div className='btn-group'>
                {isSigned?(
                       
                       <button className='btn' onClick={()=>{
                        setIssigned(false);
                        signout()
                        
                        }}>Sign-Out</button>    
                    

                ):(
                     
                    <button className='btn' onClick={()=>{signInWithGoogle()
                        setIssigned(true);
                        
                        }}>Sign-In</button>
                )}    

                

                
                   
                </div>
                
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{color: '#333'}}/>) : (<FaBars size={20} style={{color: '#333'}} />)}
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar
