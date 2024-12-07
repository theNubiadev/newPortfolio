import React  from "react";
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

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5fe1981f-252d-4243-b651-e24364f6d814");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.success) {
      setResult("");
      alert("susess")
      // toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      // toast.error(data.message)
      alert(data.message)
      setResult("")
      //   setResult(data.message);
    }
  };

  return (
    <div className="section" id="contact">
      <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
        <div className=" mb-12 lg:mb-0 lg:flex lg:flex-col">
          
          <h2 className="headline-2 lg:max-w-[12ch] reveal-up">Contact me for collaboration</h2>

          <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-30ch]">
            Reach out today to actualize your dreams and start something amaziing
      
         </p>
          <div className="flex items-center gap-2 mt-auto  ">
            {socialLinks.map(({ href, icon, alt }, key) => {
              <a href={href} key={key} target="_blank" 
              className="w-12 h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg transition-[background-color,color] hover:ng-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80 reveal-up">
                {icon}
                {alt}
              </a>
            })}
          </div>
        </div>

        <fieldset>
          <form action="" onSubmit={onSubmit} method="post">
            <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
              <div className="mb-4 ">
                <label htmlFor="name" className="label reveal-up">
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
                <label htmlFor="email" className="label reveal-up">
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
                <label htmlFor="message" className="label reveal-up">
                  Message
                </label>

                <textarea
                  name=""
                  className="text-field reveal-up resize-y min-h-32 max-h-80 "
                  placeholder="Hi!"
                  id=""
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary [&]:max-w-full reveal-up w-full justify-center" >
                {result ? result : "Send Message"}
              </button>
            </div>
            
          </form>
        </fieldset>
      </div>
    </div>
  );
}

export default Contact;
