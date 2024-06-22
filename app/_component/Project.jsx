import React from 'react';
import { ProjectCard } from './ProjectCard';

const projects = [
  { id: 1, title: 'Gemini Recommondation Movie Website', image: '/icons/project1.jpg',github:"https://github.com/eyeaadil/GemStreamFlix" },
  { id: 2, title: 'Personal Portfolio', image: '/icons/project2.png',github:"https://github.com/eyeaadil/GemStreamFlix" },
  // { id: 3, title: 'Project 3', image: '/icons/git-icon.png' },
  // Add more project objects as needed
];

const Project = () => {
  return (
    <div id='projects' className="container mx-auto px-4 py-8">
      <h2 className="text-6xl font-serif text-gray-200 text-center">Projects</h2>
      <div className="grid sm:grid-cols-1 md:flex md:justify-center md:gap-28 lg:grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} title={project.title} image={project.image} link={project.github} />
        ))}
      </div>
    </div>
  );
};

export default Project;
