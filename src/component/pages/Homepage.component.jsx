import React from "react";
import Directory from "../directory/directory.component";
import './homepage.styles.scss'
function Homepage() {
    return (
      <div className='homepage'>
      <h1>Welcome to my Homepage</h1>
      <Directory/>
    </div>
    );
  }
  
  export default Homepage;