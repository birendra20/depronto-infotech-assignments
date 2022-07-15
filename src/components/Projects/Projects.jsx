import React, { useState } from "react";
import Button from "react-bootstrap/Button";

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

const Projects = () => {
  const [data, setData] = useState(projectData);

  const sortingbyAsc = () => {
    data.sort((a, b) => {
      if (a.title > b.title) return 1;
      return -1;
    });
    setData([...data]);
  };
  const sortingbyDec = () => {
    data.sort((a, b) => {
      if (a.title < b.title) return 1;
      return -1;
    });
    setData([...data]);
  };

  return (
    <div className="py-4">
      <Button
        ml-4
        variant="primary"
        className="sortById"
        onClick={() => {
          sortingbyAsc();
        }}
      >
        Sort by Asc
      </Button>{" "}
      <Button
        m-4
        variant="secondary"
        className="sortById"
        onClick={() => {
          sortingbyDec();
        }}
      >
        Sort by Dec
      </Button>
      <table className="table border shadow">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Project Name</th>
            <th scope="col">Stacks Used</th>
          </tr>
        </thead>
        <tbody>
          {data.map((Project, index) => (
            <tr key={Project.no}>
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
