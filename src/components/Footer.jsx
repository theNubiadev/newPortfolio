import { ArrowDown05Icon } from "hugeicons-react";
import { ButtonPrimary } from "./Button";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Reviews",
    href: "#reviews",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const socials = [
  {
    label: "Github",
    href: "",
  },
  {
    label: "Instagram",
    href: "",
  },
  {
    label: "Facebook",
    href: "",
  },
  {
    label: "X",
    href: "",
  },
  {
    label: "LinkedIn",
    href: "",
  },
];

function Footer() {
  return (
    <div className="section">
      <div className="container">
        <div className="lg:grid  lg:grid-cols-2">
          <div className="mb-10 ">
            <h2 className="headline-1 mb-8 lg:max-w[12ch] reveal-up">Let&apos;s work together today!</h2>

            <ButtonPrimary
              href=""
              label="Start project"
              icon={<ArrowDown05Icon />}
              classes="reveal-up"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">

            <div className="">
              <p className="mb-2 reveal-up" > Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, key) => {
                  <li key={key}>
                    <a 
                       href={href} 
                       className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200">
                      {label}
                    </a>
                  </li>
                })}
              </ul>
            </div>


            <div className="mb-2 reveal-up">
              <p>Socials</p>
              <ul>
                {socials.map(({ label, href }, key) => {
                  <li key={key}>
                    <a 
                       href={href} 
                       target="_blank"
                       className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200">
                      {label}
                    </a>
                  </li>
                })}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between pt-10 mb-8 ">
            <a href="" className="reveal-up logo">
                <h2>John Ajibola</h2>
            </a>

            <p href="" className="text-zinc-500  reveal-uptext-sm">&copy; 2024 
                <span className="text-zinc-200">NubiaCode</span>
            </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
