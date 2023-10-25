import ProjectCard from "./ProjectCard";
import Search from "./Search";
import data from "../assets/data";
import { useEffect, useState } from "react";

const Projects = () => {
  const [value, setvalue] = useState("");
  const [filteredArray, setfilteredArray] = useState(data);

  useEffect(() => {
    if (value) {
      const filteredarray = data.filter((val) => {
        const reponame = val.repo_name.toLowerCase();
        return reponame.includes(value.toLowerCase());
      });
      setfilteredArray(filteredarray);
    } else {
      setfilteredArray(data);
    }
  }, [value]);

  return (
    <section className="py-28 px-4 sm:px-36 text-center">
      {/* search bar */}
      <Search value={value} setvalue={setvalue} />

      {/* add your project */}

      {/* Project card */}
      <div className="card__container py-4 grid lg:grid-cols-3 gap-10 place-items-center">
        {filteredArray.map((repo) => (
          <ProjectCard
            key={repo.id}
            id={repo.id}
            name={repo.repo_name}
            description={repo.description}
            tags={repo.tags}
            stars={repo.stars}
            forks={repo.forks}
            issues={repo.issues}
          />
        ))}
      </div>

      {/* back to top */}
    </section>
  );
};

export default Projects;
