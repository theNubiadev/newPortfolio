import ProjectCard from "./ProjectCard";

const works = [
  {
    imgSrc: "",
    title: "1759 Estore",
    tags: ["API", "Development"],
    projectLink: "https://www.google.com",
    classes: "", // Add classes as needed
  },
  {
    imgSrc: "",
    title: "WCU Campus",
    tags: ["API", "Development"],
    projectLink: "https://www.google.com",
    classes: "", // Add classes as needed
  },
  {
    imgSrc: "",
    title: "Farm Management",
    tags: ["API", "Development"],
    projectLink: "https://www.google.com",
    classes: "", // Add classes as needed
  },
  {
    imgSrc: "",
    title: "Ticketbritte",
    tags: ["API", "Development"],
    projectLink: "https://www.google.com",
    classes: "", // Add classes as needed
  },
];

function Work() {
  return (
    <div className="section" id="work">
      <div className="container">
        <h2 className="headline-2 mb-8">My Portfolio Highlights</h2>

        <div className="">
          {works.map(({ imgSrc, title, tags, projectLink, classes }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes={classes}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
