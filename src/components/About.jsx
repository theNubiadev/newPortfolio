import { SpaceshipIcon } from "hugeicons-react";


const aboutItems = [
  { label: "Project Done", number: 12 },
  { label: "Years of Experience", number: 2 },
];
function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12  reveal-up">
          <p className=" text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
          I am a passionate frontend developer with 2+ years of experience creating sleek and responsive user interfaces. Skilled in HTML, CSS, JavaScript, React, PHP, MySQL, and Tailwind CSS, I focus on building engaging and intuitive digital experiences.
<br/>
Currently pursuing a degree at a Nigerian university, I am committed to continuous learning and growth in the tech space. Whether it’s building from scratch or enhancing existing systems, I thrive on solving challenges that make technology accessible and impactful.
          </p>

          <div className=" flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className=" flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl ">
                    {number}
                  </span>
                  <span className=" text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>
                <p className="text-sm text-zinc-400 ">{label}</p>
              </div>
            ))}

            <SpaceshipIcon
              className="ml-auto md:w-[40px] md:h-[40px]"
              width={30}
              height={30}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
