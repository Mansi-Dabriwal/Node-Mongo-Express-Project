import React from "react";

export default function JobCard(props ) {
  return (
    <div>
      {/* <h1>{INFO}</h1>
      <p>{Description}</p>
      <p>This Page is about Home of the company</p> */}
        {/* <div className="row">
        <div className="col-sm-3"> */}
        <div className="card" style={{width: "18rem"}}>
        <img src={props.image} class="card-img-top" alt="..." style={{height:"253px"}}/>
        <div className="card-body">
            
            <h5 className="card-title">{props.INFO}</h5>
            <p className="card-text">${props.Description}</p> 
        </div>
        </div>
        {/* </div>
        </div> */}
    </div>
  );
}

