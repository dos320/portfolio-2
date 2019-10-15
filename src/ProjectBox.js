import React from "react"

function ProjectBox(props){
  
  
  return(
    <div className="project-box" onClick={()=>window.open(props.link)}>
      <img style={{
        height:'100px', 
        paddingTop: '10px', 
        paddingLeft: '10px',
        paddingRight: '10px' 
        }} 
        src={props.image} alt="Project Box"></img>
      <h3 className="project-box-text">{props.text}</h3>
    </div>
  )
}

export default ProjectBox