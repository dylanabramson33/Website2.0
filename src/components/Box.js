import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useState } from 'react';
import Image from "../components/image"
import "./Box.css"
import 'bootstrap/dist/css/bootstrap.min.css';


function Box({ siteTitle }){



    return (
      <div className="Box">
        <div className="projectImage">
          <Image/>
        </div>
        <div className="description">
          <h1 > Evo </h1>
          <h5> Role: AI/Core Mechanics </h5>
          <p> STEM Video Game designed for second fifth graders. </p>
        </div>
      </div>
    )

}

export default Box
