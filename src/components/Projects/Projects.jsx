import React from "react";

const Projects = () => {
  const projectData = [
    {
      no: 1,
      title: "instagram",
      stacks: ["html ,", "css ,", "javascript"],
    },
    {
      no: 2,
      title: "facebook",
      stacks: ["html ,", "css ,", "React"],
    },
    {
      no: 3,
      title: "amazon",
      stacks: ["html ,", "css ,", "javascript"],
    },
    {
      no: 4,
      title: "flipKart",
      stacks: ["html ,", "css ,", "javascript ,", "React ,", "mongoDb"],
    },
  ];

  return (
    <div className="py-4">
      <table className="table border shadow">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Project Name</th>
            <th scope="col">Stacks Used</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {projectData.map((Project, index) => (
            <tr key={Project._id}>
              <th scope="row">{index + 1} </th>
              <td>{Project.title}</td>
              <td>{Project.stacks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Projects;
