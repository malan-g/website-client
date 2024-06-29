const projects = [
  {
    name: "Project A",
  },
  {
    name: "Project B",
  },
  {
    name: "Project C",
  },
  {
    name: "Project D",
  },
  {
    name: "Project E",
  },
  {
    name: "Project F",
  },
];

function Projects() {
  return (
    <div className="flex flex-wrap gap-[25px] ">
      {projects.map((project) => (
        <div>
          <div className="bg-gray-500 h-[200px] w-[200px]"></div>
          <div className="text-center"> {project.name}</div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
