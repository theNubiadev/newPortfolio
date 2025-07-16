import { ArrowDown02Icon, Car01Icon } from "hugeicons-react";
import { ButtonPrimary, ButtonOutline } from "./Button";
import Him from "../assets/Him.jpeg"
function Hero() {
  return (
    <section id="home" className=" pt-28 lg:pt-36">
      <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
      <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden ">
            <img src={Him} alt="" width={656} height={800} />
          </figure>
        </div>

        <div>
          <div className=" flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
              <span className="relative w-2 h-2 rounded-full bg-emerald-400">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              Available for work <Car01Icon className="animate-pulse" />
            </div>
          </div>

          <h2 className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10">
          Bringing Ideas to Life with Code    {" "} 
          </h2>
          
          <div className=" flex items-center gap-3">
            <ButtonPrimary label="Download CV" icon="download" />

            <ButtonOutline
              href="#about"
              label="Scroll down"
              icon={<ArrowDown02Icon />}
            />
          </div>
        </div>

        
      </div>
    </section>
  );
}

export default Hero;
