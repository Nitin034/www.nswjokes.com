 import React, { useState } from 'react';
 import Navbar from './Navbar'
 import Jokeitem from './jokeitem'
 import Addsection from './Addsection';
import Footer from './Footer';

 function App() {
  const [mode, setMode]= useState('light');

  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#444444';
    }
    else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    }
  }
   return (
     <div>
        <div>
        <Navbar mode={mode} toggleMode={toggleMode}/>
        <div style={{marginTop: "10vh"}}>
        <Addsection/>
        <Jokeitem/>
        <Footer/>
        </div>
      </div>
     </div>
   )
 }
 
 export default App
    