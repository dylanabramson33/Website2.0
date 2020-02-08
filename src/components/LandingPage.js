import { Link } from "gatsby";
import React, {useRef} from 'react';
import {use, useSpring, useTrail, animated} from 'react-spring';
import resume from "../images/Abramson_Resume.pdf"

import cloud from '../images/Cloud.svg'
import github from '../images/github.svg'
import linkedin from '../images/linkedin_circle.png'


function LandingPage() {

  const items = [{icon: github, link: "https://github.com/dylanabramson33"},
                {icon : linkedin,link: "https://www.linkedin.com/in/dylan-abramson-26b034134/"}]
  const curConfig = { mass: 5, tension: 300,}
  const trail = useTrail(items.length, {
    config : curConfig,
    from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    to: {opacity: 1, transform: 'translate3d(0,0px,0)'}
  })

  const props = useSpring({
    from:  {opacity: 0,},
    to: {opacity: 1},
    config: curConfig,
  })

  return (
      <div className="LandingPage">
          <img style={{marginTop:'50px',  width: '350px'}}src={cloud}/>
          <animated.div style={props}>
          <h1 style={{position: 'relative',fontSize: '50px', color: 'white',textAlign: 'center', top: '-145px'}}>   Lets Build Something </h1>
          </animated.div>
          <div style={{marginTop:'-50px'}}>
          <button style={{backgroundColor:"white",textDecoration:'none', color:'black', borderRadius: '10px', fontFamily :'Open Sans', padding: '10px 30px'}}>
            <a href={resume}> Resume </a>
          </button>
          </div>
          {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={index}
            className="trails-text"
            style={{ ...rest, display:"inline-block", marginTop: '50px' }}>
            {<a href={items[index].link}><img style={{ width:'60px', marginRight:'10px'}} src={items[index].icon}/></a>}
          </animated.div>
        ))}


      </div>



  )

}
export default LandingPage;
