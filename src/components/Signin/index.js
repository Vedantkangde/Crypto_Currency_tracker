import React,{useState,Component} from 'react'
import {
    Container,FormWrap,Icon,FormContent,Form,FormH1,FormLabel,FormInput,FormButton,Text,Text1
} from './SigninElements.js'
import fire from '../login system/firebase'
import Navbar from './Navbarcalendar'

const SignIn =(props)=> {


    return (
        <>
        <Container>

            <Navbar/>
            <FormWrap>
                
                <FormContent>
                    <Form >

                        <FormH1>Sign in your Account</FormH1>
                        <FormLabel htmlFor='for'>Email</FormLabel>
                        <FormInput name='email' id= 'email' type='email' required  autoFocus
       
          />
                        <FormLabel htmlFor='for'>Password</FormLabel>
                        
                        <FormInput name='password' id='password'type='password' required  
           />
                        
                      
                        
 
                               
                        <Text1>Dont have an Account? </Text1>
                        <Text to="/signup">sign up</Text>
                        
                              
                    
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
            
        </>
    )
                        }


export default SignIn
