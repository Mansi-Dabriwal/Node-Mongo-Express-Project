import React from "react";
import Card from "../../component/Card";
import Navbar from "../Navbar/Navbar";


// export default function AboutUs() {
//   return (
//     <div>
//       <Navbar></Navbar>
//       <Info>This is About Us Page</Info>
      
//     </div>
//   );
// }

function AboutUs() {
  return (
    <div>
      <Navbar></Navbar>
      <Card INFO={"About US"} Description={"This Page is about us page."}></Card>
    
      
    </div>
  );
}

export default AboutUs;
