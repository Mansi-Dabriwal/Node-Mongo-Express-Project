import React from "react";
import JobCard from "../../component/JobCard";

function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem" style={{float:"left",padding:"30px"}}>  
      <JobCard image={image} INFO={name} Description={price}></JobCard>
    </div>
   
  );
}

export default MenuItem;