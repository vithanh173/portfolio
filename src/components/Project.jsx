import React from 'react'
import projects from '../data/projects'
import TitleSection from './TitleSection'
import ProjectItem from './ProjectItem'

function Project() {
    return (
        <div className="py-12">
            <TitleSection id="project">
                Project
            </TitleSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {projects.map(project => (
                    <ProjectItem
                        key={project.id}
                        title={project.title}
                        img={project.imgURL}
                        techs={project.technology}></ProjectItem>
                ))}
            </div>
        </div>
    )
}

export default Project
