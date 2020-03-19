import React from "react";
// import styled from "styled-components"



//  const Button = styled.button`
//  /* Adapt the colors based on primary prop */
//  background: ${props => props.primary ? "palevioletred" : "white"};
//  color: ${props => props.primary ? "white" : "palevioletred"};

//  font-size: 1em;
//  margin: 1em;
//  padding: 0.25em 1em;
//  border: 2px solid palevioletred;
//  border-radius: 3px;
// `;



// import { Button } from 'reactstrap';

// export default (props) => {
//     return (
//         <div>
//         <Button color="primary">primary</Button>{' '}
//         <Button color="secondary">secondary</Button>{' '}
//         <Button color="success">success</Button>{' '}
//         <Button color="info">info</Button>{' '}
//         <Button color="warning">warning</Button>{' '}
//         <Button color="danger">danger</Button>{' '}
//         <Button color="link">link</Button>
//       </div>
//     );
//   };
export default (props) => {
         return (
<div>
<Button>Normal</Button>
<Button primary>Primary</Button>
</div>
         )}