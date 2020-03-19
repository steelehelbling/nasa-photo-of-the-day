import React from "react";
import "./Image.css";
import styled from "styled-components"

const Imageborder = styled.div`
background:darkgrey;
width:100%;
padding : 45px;
max-width: 800px;
border: 3px solid black;
margin: 0 auto;
margin-top:10px;
`;

function ImageMaker(props) {
 return (<Imageborder><img id="back" src={props.hdurl} alt='new_alt'></img></Imageborder>)
}
export default ImageMaker; 

