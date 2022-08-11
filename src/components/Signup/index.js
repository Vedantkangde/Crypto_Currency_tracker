import React , {useRef,useState,Component} from 'react'
import { useAuth } from '../login system/contexts/AuthContext';
import {Alert } from "react-bootstrap"
import fire from '../login system/firebase'
import {

    Container,FormWrap,Icon,FormContent,Form,FormH1,FormLabel,FormInput,FormButton,Text
} from './SignupElements.js'
import Navbar from './Navbarcalendar'



const Signup =(props) =>{


    
    const { email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handlesignup,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError} = props
  
    

    
    return (

        <>
         <Container>
         <Navbar/>
            <FormWrap>
                <FormContent>
                    <Form >
                        <FormH1>Sign up your Account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput type='email' required value={email}/>
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        <FormInput type='password' required  value={password} />
                        <FormButton type='submit' onClick={ handlesignup}> Sign up</FormButton>
                        <Text to="/signin">Login</Text>
                      
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
        </>

    )}


export default Signup
