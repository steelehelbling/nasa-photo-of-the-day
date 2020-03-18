import React, { useEffect, useState } from "react";
import "./App.css";
import axios from 'axios';
import Toptext from './Components/Toptext.js';
import ImageMaker from './Components/ImageMaker.js';


function App() {
const [nasaData, setNasaData] = useState([]);

useEffect(() => {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=2NxiVg56jwJW3eJ6C4htqqPwJkMNKVJudTfqwkiu')
  
  .then(response => {
    setNasaData(response.data);
  });


}, []);

console.log(nasaData);


  return (
          <div className="App">
     
      <p>
space 🚀!
      </p> 
      
      

      <div className="top_content">
        <Toptext title={nasaData.title} date={nasaData.date}copyright={nasaData.copyright} />
        
      </div>
      <div className="bottom_content">
        <p className="explanation">
          {nasaData.explanation};
         
      </p> 
   
  
      </div>
      <ImageMaker className="background" media_type={nasaData.media_type} src={nasaData.url} hdurl={nasaData.hdurl}>
    </ImageMaker>
    </div>
   
  );
}

export default App;
