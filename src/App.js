import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';
import Toptext from './Components/Toptext.js';
import ImageMaker from './Components/ImageMaker.js';

//import Button from "./Components/button.js"
import styled from "styled-components"



 const Bmaker = styled.button`
 
 background: white;
 color:darkblue;

 font-size: 1em;
 margin: 1em;
 padding: 0.25em 1em;
 border: 2px solid darkblue;
 border-radius: 3px;
`;
const Flexmaker = styled.div`
 

  z-index: 1;
  background-color: rgba(0, 0, 0, 0.534);
  border: black solid 3px;
  color: white;
  padding: 10px;
  max-width: 800px;
  margin: 0 auto;


`;

const Footermaker = styled.footer`
 
display: flex;
justify-content: space-evenly;
padding: 100px 0px 100px 0px;



`;


function App() {
const [nasaData, setNasaData] = useState([]);

useEffect(() => {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=2NxiVg56jwJW3eJ6C4htqqPwJkMNKVJudTfqwkiu')
  
  .then(response => {
    setNasaData(response.data)
  })
.catch(error => {
console.log(error)
});

}, []);

console.log(nasaData);


  return (
          <div className="App">
      <h1>
space 🚀!
       </h1>
       <Flexmaker>
      
        <Toptext title={nasaData.title} date={nasaData.date}copyright={nasaData.copyright} />
             <p className="explanation">
          {nasaData.explanation};
         
      </p>    
       </Flexmaker>
      <div className="bottom_content">
<ImageMaker id="background" media_type={nasaData.media_type} src={nasaData.url} hdurl={nasaData.hdurl} />
   </div>
  
     <Footermaker>
       <Bmaker>click here</Bmaker>
   
     </Footermaker>
   
    </div>
   
  );
}

export default App;
