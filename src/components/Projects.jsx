import React from "react";
import ProjectCard from "./ProjectCard";
import Search from "./Search";
import data from "../assets/data";

const Projects = () => {
  return (
    <section className="py-28 px-4 sm:px-36 text-center">
      {/* search bar */}
      <Search />

      {/* add your project */}

      {/* Project card */}
      <div className="card__container py-4 grid lg:grid-cols-3 gap-10 place-items-center">
        {/* {data.map((repo) => {
          <ProjectCard
            id={repo.id}
            name={repo.repo_name}
            description={repo.description}
            tags={repo.tags}
            stars={repo.stars}
            forks={repo.forks}
            issues={repo.issues}
          />;
        })} */}
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>

      {/* back to top */}
    </section>
  );
};

export default Projects;
