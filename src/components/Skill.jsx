import SkillCard from "./SkillCard";



const skillItem = [
  { label: "Figma", desc: "Design Tool" },
  { label: "Javascript", desc: "Interaction" },
  { label: "React", desc: "Framework" },
  { label: "Tailwind", desc: "Interface" },
  { label: "Nodejs", desc: "Backend" },
  { label: "Express", desc: "Node framework" },
  { label: "Wordpress", desc: "CMS" },
];

function Skill() {
  return (
    <div className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools i use</h2>
        <p className="text-zinc-400 reveal=up mt-3 mb-8 max-w-[50ch]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          sunt maxime id sapiente harum libero iste expedita. Cum mollitia illum
          distinctio quis, accusamus dolorum minus enim minima dolore incidunt
          reiciendis.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ label, desc }, key) => (
            <SkillCard 
             key={key}
             label={label} 
             desc={desc} 
             classes="reveal-up" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skill;
