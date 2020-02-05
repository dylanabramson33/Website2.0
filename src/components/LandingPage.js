import { Link } from "gatsby";
import React from 'react';
import { useSpring, animated } from 'react-spring';
import cloud from '../images/Cloud.svg'
import github from '../images/github.svg'



function LandingPage() {






  return (

      <div className="LandingPage">
          <img style={{marginTop:'100px',  width: '250px'}}src={cloud}/>
          <div>
          <h1 style={{position: 'relative', color: 'white',textAlign: 'center', top: '-125px'}}>   Lets Build Something </h1>
          </div>
          <div style={{marginTop:'-50px'}}>
          <button style={{borderRadius: '10px', fontFamily :'Open Sans', padding: '10px 30px'}}>
            Resume
          </button>
          </div>
          

      </div>

  )

}
export default LandingPage;
