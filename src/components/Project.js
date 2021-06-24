import React, { useState, useEffect } from 'react';
import sanityClient from '../client.js';

export default function Project() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient.fetch(`*[_type == "project"]{
      title,
      date,
      place,
      description,
      projectType,
      link,
      tags,
    }`).then((data) => setProjectData(data))
      .catch(console.error);
  }, []);

  return (
    <main className="bg-green-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">
          My Project
        </h1>
        <h2 className="text-lg text-gray-600 flex justyfy-center mb-12">
          Welcom to my project
        </h2>
        <section className="grid grid-col-2 grap-8">
          {projectData && projectData.map((project, index) => (
          <article className="relative rounded-lg shadow-xl bg-white p-16">
            <h3 className="text-gray-800 text-3xl font-bold mb-2 hover:text-red-700">
              <a
                href={project.link}
                alt={project.title}
                target="_blank"
                rel="noopener noreferrer"
              >{project.title}</a>
            </h3>
            <div className="text-gray-500 text-xs space-x-4">
              <span>
                <strong className="font-bold">Finished on</strong>:{" "}
                {new Date(project.date).toLocaleDateString()}
              </span>
              <span>
                <strong className="font-bold">Company</strong>:{" "}
                {project.place}
              </span>
              <span>
                <strong className="font-bold">Company</strong>:{" "}
                {project.projectType}
              </span>
              <p className="my-6 text-lg text-gray-700 leading-relaxed">
                {project.description}
              </p>
              <a 
                href={project.link} 
                rel="noopener noreferrer" 
                target="_blank" 
                className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl">
                Viw the project{" "}
                {/* <span role="img" aria-label="right pointer"></span> */}
              </a>
            </div>
          </article>
          ))}
        </section>
      </section>
    </main>
  )
}