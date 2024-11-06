import { SpaceshipIcon } from "hugeicons-react";
const aboutItems = [
  { label: "Project Done", number: 45 },
  { label: "Years of Experience", number: 3 },
];
function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 ">
          <p className=" text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            nemo, rem sequi officiis eum, enim eaque earum temporibus vero
            consectetur, dicta architecto! Blanditiis laboriosam maxime,
            provident quia ex fugiat excepturi. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Corporis non repudiandae provident
            similique voluptas, voluptatibus dolore labore magni dignissimos
            itaque animi deleniti obcaecati perferendis beatae sed. Expedita
            dignissimos et a.
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
