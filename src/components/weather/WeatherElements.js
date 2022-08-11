import styled from 'styled-components'



export const WeatherContainer = styled.div `

height:120px;
flex-direction:column;
justify-content:center;
align-items:center;
background:#010606;

@media screen and(max-width:768px){

    height:1100px;
}
@media screen and(max-width: 480px){

height:1300px;
}

`
export const WeatherContainer1 = styled.div `

height:700px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background:#010606;
Padding-top:100px;
Padding-bottom:100px;

@media screen and(max-width:768px){

    height:1100px;
}
@media screen and(max-width: 480px){

height:1300px;
}

`
export const WeatherH1 = styled.h1 `
font-size:2.5rem;
color:white;
margin-bottom:0px;
background:#010606;
`

export const WeatherCard = styled.div `

display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
border-radius:10px;
max-height:340px;
padding:30px;
//box-shadow:0 1px 3px rgba(0,0,0,0.2);
transition:all 0.2s ease-in-out;
text-decoration:none;
border-radius:4px;
border:1px solid;
border-color:#00985a;


&:hover{

    transform:scale(1.02);
    transition:all 0.2s ease-in-out;
    cursor: pointer;
}



`
export const WeatherCard1 = styled.div `
border-radius:4px;
border: 1px  solid;
border-color:#00985a;
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
border-radius:10px;
max-height:340px;
padding:40px;
margin-bottom:30px;

box-shadow:0 1px 3px rgba(0,0,0,0.2);
transition:all 0.2s ease-in-out;
text-decoration:none;


&:hover{

    transform:scale(1.02);
    transition:all 0.2s ease-in-out;
    cursor: pointer;
}




`
export const WeatherCard2 = styled.div `

display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:center;
border-radius:10px;
max-height:340px;
padding:40px;
margin-bottom:30px;
border-radius:4px;
border-color:#00985a;
border:1px solid;

box-shadow:0 1px 3px rgba(0,0,0,0.2);
transition:all 0.2s ease-in-out;
text-decoration:none;


&:hover{

    transform:scale(1.02);
    transition:all 0.2s ease-in-out;
    cursor: pointer;
}




`

export const WeatherWrapper = styled.div `
background:#010606;
max-width:1000px;
margin:0 auto;
display:grid;
grid-template-columns:1fr 1fr 1fr 1fr;
align-items:center;
grid-gap:16px;
padding:0 50px;

@media screen and (max-width:1000px){

    grid-template-columns:1fr 1fr;
    padding:0 20px;
}

@media screen and (max-width:768px){

grid-template-columns: 1fr;
padding:0 20px;
}
`
export const WeatherWrapper1 = styled.div `
max-width:1000px;
margin:0 auto;
display:grid;
grid-template-columns:1fr 1fr;
align-items:center;
grid-gap:16px;
padding:0 50px;

@media screen and (max-width:1000px){

    grid-template-columns:1fr 1fr;
    padding:0 20px;
}

@media screen and (max-width:768px){

grid-template-columns: 1fr;
padding:0 20px;
}
`
export const FormInput = styled.input `

padding:16px 16px;
Width:500px;
margin-bottom:22px;
border:none;
border-radius:4px;
border-color:#00985a;
border:1px solid;
`