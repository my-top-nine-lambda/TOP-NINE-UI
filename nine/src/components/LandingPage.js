import React from "react";
import './components.css';
import { Button } from 'reactstrap';

const Land = () => {
  return (
    <div className="land">
      <header>
         <nav className="landNav">
           <>
           <h1>Top 3</h1>  
           </>
           <p>
            <Button className="landBtn"color="primary" href="/login">Sign In</Button> 
          </p>
        </nav> 
      </header>
      <div className='landCard'>
        <h2>Top 3</h2>
        <p>
          When was the last time you had to pick your Top 3 movies? Don't
          worry...here's your chance!
        </p>     
        <p> 
          <Button color="primary" className="register-button" href="/register">Register Here</Button>  
        </p> 
      </div>
    </div>
  );
};

export default Land;
