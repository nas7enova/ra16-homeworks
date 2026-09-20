function ProjectList({ projects }) {
  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <div className="project-item" key={index}>
          <img src={project.img} alt={project.category} />
        </div>
      ))}
    </div>
  );
}

export default ProjectList;