import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect, useState } from 'react';
import "./Box.css"
import 'bootstrap/dist/css/bootstrap.min.css';


function Box({ projectTitle, role, previewImage, title, shortDescription}){



    return (
      <div className="Box">
        <div className="projectImage">
          <img style={{height: '176px', borderRadius: '10px'}} src={previewImage}/>
        </div>
        <div style={{color: 'white'}} className="description">
          <h1 > {projectTitle} </h1>
          <h5> Role: {role} </h5>
          <p style={{paddigBottom:'3px'}}> {shortDescription} </p>
        </div>
      </div>
    )

}

export default Box;
