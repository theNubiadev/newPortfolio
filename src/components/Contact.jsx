import {
  InstagramIcon,
  XingIcon,
  Github01Icon,
} from "hugeicons-react";

const socialLinks = [
  {
    href: "",
    alt: "Github",
    icon: <Github01Icon />,
  },
  {
    href: "",
    alt: "Instagram",
    icon: <InstagramIcon />,
  },
  {
    href: "",
    alt: "X",
    icon: <XingIcon />,
  },
];
function Contact() {
  return (
    <div className="section" id="contact">
      <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
        <div className=" mb-12 lg:mb-0 lg:flex lg:flex-col">
          
          <h2 className="headline-2 lg:max-w-[12ch]">Contact me for collaboration</h2>

          <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-30ch]">
            Reach out today to actualize your dreams and start something amaziing
      
         </p>
          <div className="flex items-center gap-2 mt-auto  ">
            {socialLinks.map(({ href, icon }, key) => {
              <a href={href} key={key} target="_blank" className="">
                {icon}
                <XingIcon />
              </a>
              
            })}
          </div>
        </div>

        <fieldset>
          <form action="" method="post">
            <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
              <div className="mb-4 ">
                <label htmlFor="name" className="label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="text-field "
                  autoComplete="name"
                  placeholder="John Ajibola"
                  required
                />
              </div>

              <div className="mb-4 ">
                <label htmlFor="email" className="label">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="text-field "
                  autoComplete="email"
                  placeholder="address@email.com"
                  required
                />
              </div>

              <div className="mb-4">
                <label htmlFor="message" className="label">
                  Message
                </label>

                <textarea
                  name=""
                  className="text-field resize-y min-h-32 max-h-80 "
                  placeholder="Hi!"
                  id=""
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary [&]:max-w-full  w-full justify-center" >
                Submit{" "}
              </button>
            </div>
          </form>
        </fieldset>
      </div>
    </div>
  );
}

export default Contact;
