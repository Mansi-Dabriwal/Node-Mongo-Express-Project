import React from 'react'
import { MenuList } from "../helpers/MenuList";
import MenuItem from "../Pages/MenuItem";
import Navbar from "../Navbar/Navbar";




function Jobs() {
  return (
    <div>
        <Navbar></Navbar>
    <div className="menu">
      <h1 className="menuTitle"style={{textAlign:"center"}}>Our Jobs</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              price={menuItem.price}
            />


          );
        })}
      </div>
    </div>

    </div>
    
  )
}

export default Jobs