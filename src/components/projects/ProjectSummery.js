import React from 'react'
import { Link } from 'react-router-dom'

const ProjectSummery = ({project}) => {
	return (
		<div className="card z-depth-0 project-summery"> 
			<div className="card-content grey-text text-darken-3">
				<Link to="project/2"><span className="card-title">{project.title}</span></Link>
				<p>Posted By Muhammed Anas</p>
				<p className="grey-text">3rd September 2am</p>
			</div>
		</div>
	)
}

export default ProjectSummery