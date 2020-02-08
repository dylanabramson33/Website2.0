import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useState } from 'react';
import Image from "../components/image"
import "./Box.css"
import 'bootstrap/dist/css/bootstrap.min.css';


function Box({ projectTitle, role, previewImage, title, shortDescription}){



    return (
      <div className="Box">
        <div className="projectImage">
          <img style={{width: '200px',height: '165px', borderRadius: '10px'}} src={previewImage}/>
        </div>
        <div className="description">
          <h1 > {projectTitle} </h1>
          <h5> Role: {role} </h5>
          <p style={{paddigBottom:'3px'}}> {shortDescription} </p>
        </div>
      </div>
    )

}

export default Box;
