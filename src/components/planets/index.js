import React ,{Component}from 'react'
import constellationList from "./MOCK_DATA.json";
import { StarWrapper, StarCard, StarImg, StarLink, StarH1,StarContainer,Planetinput,FormInput} from './planetElement'
import {useState} from 'react';



const Planet = () => {

    const [SearchTerm,SetSearchTerm] = useState('')

    return(
       
        
        <StarContainer>
            <div  id='stars'>
           
            <center>  
                 
                <FormInput
                  label="Search Country"
                  placeholder="search"
                  onChange={event =>{SetSearchTerm(event.target.value);
                }}
               
                />
                
                </center> 

                 <center> <StarH1>Galaxies</StarH1></center>
            <StarWrapper>
             
            {constellationList.filter((val) => {

if(SearchTerm == ""){
    return val
} else if (val.Constellation.toLocaleLowerCase().includes(SearchTerm.toLowerCase())){

    return val
}
}).map((val,key) => {

       return(
           
                <StarLink href={val.C_link}>
                <StarCard key={key}>
                    <h2>{val.Constellation}</h2>
                    <StarImg src={val.img}/>
                </StarCard>
                </StarLink>
               
                
       )})}
             
                
                
            </StarWrapper>
            </div>
            <div  id='stars1'>
            <center> <StarH1>Stars</StarH1></center>
            <StarWrapper>
            
            {constellationList.filter((val) => {

if(SearchTerm == ""){
    return val
} else if (val.Constellation.toLocaleLowerCase().includes(SearchTerm.toLowerCase())){

    return val
}
}).map((val,key) => {

       return(
           
                <StarLink href={val.C_link}>
                <StarCard key={key}>
                    <h2>{val.Constellation}</h2>
                    <StarImg src={val.img}/>
                </StarCard>
                </StarLink>
               
                
       )})}
               
               
               
            </StarWrapper>
            </div>
            <div  id='stars2'>
            <center> <StarH1>Nebula</StarH1></center>
            <StarWrapper>
           
                <StarLink href="//en.wikipedia.org/wiki/Andromeda_Galaxy">
                <StarCard>
                    <h2>Andromeda</h2>
                    <StarImg />
                </StarCard>
                </StarLink>
               
                
            </StarWrapper>
            </div>
        </StarContainer>

        
        
    )
}

export default Planet

