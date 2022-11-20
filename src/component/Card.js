import React from "react";

export default function Card(props ) {
  return (
    <div>
        <div className="card" style={{width: "18rem", margin:"auto", marginTop:"10px", textAlign:"center"}}>
        <div className="card-body">
            <h5 className="card-title">{props.INFO}</h5>
            <p className="card-text">{props.Description}</p> 
        </div>
        </div>  
    </div>
  );
}

