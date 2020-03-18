import React from 'react';

function Toptext(props) {
    return (
        <div> 
             <h1 className="copyright">{props.copyright}</h1> 
             <h2 className="date">{props.date}</h2>
            <h3 className="title">{props.title}</h3>
        </div>
    )
}

export default Toptext;