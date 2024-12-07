import SkillCard from "./SkillCard";
import reactLogo from '../assets/react-2.svg'
import twcLogo from '../assets/tailwind-css-2.svg';
import wpLogo from '../assets/wordpress-icon.svg';
import nodeLogo from '../assets/nodejs-icon.svg';
import Figma from '../assets/figma-icon.svg';
import JsLogo from '../assets/logo-javascript.svg';
import expressLogo from '../assets/express-109.svg';

const skillItem = [
  { label: "Figma", desc: "Design Tool", imgSrc: Figma, },
  { label: "Javascript", desc: "Interaction" , imgSrc: JsLogo },
  { label: "React", desc: "Framework", imgSrc: reactLogo },
  { label: "Tailwind", desc: "Interface" , imgSrc: twcLogo},
  { label: "Nodejs", desc: "Backend" , imgSrc: nodeLogo},
  { label: "Express", desc: "Node framework", imgSrc: expressLogo },
  { label: "Wordpress", desc: "CMS" , imgSrc: wpLogo},
];

function Skill() {
  return (
    <div className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools i use</h2>
        <p className="text-zinc-400 reveal=up mt-3 mb-8 max-w-[50ch]">
          Been intentional about building world class solutions to business. Uisng the best tools available and reinventing the wheel. 
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItem.map(({ label, desc, imgSrc }, key) => (
            <SkillCard 
             key={key}
             label={label} 
             imgSrc={imgSrc}
             desc={desc} 
             classes="reveal-up" />
          ))};
        </div>
      </div>
    </div>
  );
}

export default Skill;
