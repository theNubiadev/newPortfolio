import { ArrowDown05Icon, GithubIcon, Facebook01Icon, InstagramIcon, TwitterIcon, Linkedin01Icon, } from "hugeicons-react";
import { ButtonPrimary } from "./Button";

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
            <div>
              <p className="mb-2 reveal-up text-xl ">Quick Links</p>

              <ul>
                <li className="block text-m text-zinc-500 py-1 transition-color hover:text-zinc-200" >
                  <a href=""> Home </a> </li>
                <li className="block text-m text-zinc-500 py-1 transition-color hover:text-zinc-200" >
                  <a href=""> About </a> </li>
                <li className="block text-m text-zinc-500 py-1 transition-color hover:text-zinc-200" >
                  <a href=""> Projects </a> </li>
                <li className="block text-m text-zinc-500 py-1 transition-color hover:text-zinc-200" >
                  <a href=""> Review </a> </li>
                <li className="block text-m text-zinc-500 py-1 transition-color hover:text-zinc-200" >
                  <a href=""> Contact </a> </li>
              </ul>
            </div>

            <div>
              <p className="mb-2 reveal-up text-xl ">Social Links</p>

              <ul>
                <li className="block text-m text-zinc-500 py-1 transition-color hover:text-zinc-200" >
                  <a href="https://github.com/Ajaiyeoba.com" target='_blank'> <GithubIcon /> </a> </li>
                <li className="block text-m text-zinc-500 py-1 transition-color hover:text-zinc-200" >
                  <a href="https://x.com/TheNubiaDev.com" target='_blank'> <TwitterIcon /> </a> </li>
                <li className="block text-m text-zinc-500 py-1 transition-color hover:text-zinc-200" >
                  <a href="https://" target='_blank'>  <InstagramIcon /> </a> </li>
                <li className="block text-m text-zinc-500 py-1 transition-color hover:text-zinc-200" >
                  <a href="https://" target='_blank'>  <Facebook01Icon /> </a> </li>
                <li className="block text-m text-zinc-500 py-1 transition-color hover:text-zinc-200" >
                  <a href="https://" target='_blank'> <Linkedin01Icon /> </a> </li>
              </ul>
            </div>

          </div>
        </div>
        <div className="flex items-center justify-between pt-10 mb-8 ">
          <a href="" className="reveal-up logo">
            <h2>Ajaiyeoba John </h2>
          </a>

          <p href="" className="text-zinc-500  reveal-uptext-sm">&copy; 2025
            <span className="text-zinc-200">NubiaCode</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
