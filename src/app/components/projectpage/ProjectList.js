import SingleProject from "./SingleProject";
import projectApi from "../../api/projectApi";

const ProjectList = () => {
  return (
    <>
      <div className="mt-16 sm:mt-20">
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {projectApi.map((currEle) => (
            <SingleProject
              title={currEle.title}
              liveLink={currEle.liveLink}
              githubLink={currEle.githubLink}
              imgSrc={currEle.imgSrc}
              description={currEle.description}
              key={crypto.randomUUID()}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectList;
