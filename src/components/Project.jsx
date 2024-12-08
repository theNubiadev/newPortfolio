import ProjectCard from "./ProjectCard";
import hamverse from '../assets/hamverse.jpg'
import estore from '../assets/1759e.jpg';
import wcu from '../assets/wcu.jpg'
import revhomes from '../assets/revHomes.jpg'
const projects = [
  {
    imgSrc: estore,  
    title: "1759 Estore",
    tags: ["Tailwind", "Responsiveness", "API", "Development", "Ecommerce", "Express"],
    projectLink: "https://1759store.vercel.app/",
    classes: "",
  },
  {
    imgSrc: wcu,
    title: "WCU Campus",
    tags: ["API", "Development", "Academics"],
    projectLink: "https://wcu-project.vercel.app/",
    classes: "",
  },
  {
    imgSrc: hamverse,
    title: "Hamverse Movie site",
    tags: ["TMDB-API", "Responsive", "React", "Tailwind", "Fun"],
    projectLink: "https://",
    classes: "",
  },
  {
    imgSrc: revhomes,
    title: "revHomes",
    tags: [ " React", "Tailwind", "Animations","Property", "Development", "Sales", "Technology", "Solutions"],
    projectLink: "https://www.google.com",
    classes: "",
  },
];

function Project() {
  return (
    <div className="section" id="projects">
      <div className="container">
        <h2 className="headline-2 mb-8">My Portfolio Highlights</h2>

        <div className=" grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))]">
          {projects.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="reveal-up"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
