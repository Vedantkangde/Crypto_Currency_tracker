import React ,{useState} from 'react'
import Navbar from './Components/Navbar';
import Featured from './Components/Featured'
import Hero from './Components/Hero'
//import Signup from './Components/Signup'
import Footer from './Components/Footer'


function App() {
 
  
  const[isSigned,setIssigned] = useState(false);
  
  return (
    <>
     
         <div>
        
      <Navbar isSigned={isSigned} setIssigned={setIssigned}/>
      <Hero />
      <Featured />
      <Footer/>
      </div>
    
       
      
    </>
  );
}

export default App;
