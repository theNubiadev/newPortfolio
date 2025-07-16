import ReviewCard from "./ReviewCard";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {useGSAP} from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);
const reviews = [
  {
    content:
      "Exceptional Web development? Delivered a seamless, responsive site with clean code and great UX",
    nameTag: "Mayowa Ojo",
    imgSrc: "",
    company: "",
  },
  {
    content:
      "Working with John  has been the best choice i made.",
    nameTag: "Nwaorgu Uchenna",
    imgSrc: "",
    company: "Trevida",
  },
  // {
  //   content:
  //     "Exceptional Web development? Delivered a seamless, responsive site with clean code and great UX",
  //   nameTag: "Sallie Njuku",
  //   imgSrc: "",
  //   company: "Chaos",
  // },
  // {
  //   content:
  //     "Exceptional Web development? Delivered a seamless, responsive site with clean code and great UX",
  //   nameTag: "Sallie Njuku",
  //   imgSrc: "",
  //   company: "Chaos",
  // },
  // {
  //   content:
  //     "Exceptional Web development? Delivered a seamless, responsive site with clean code and great UX",
  //   nameTag: "Sallie Njuku",
  //   imgSrc: "",
  //   company: "Chaos",
  // },
];

function Review() {
  useGSAP(() => {
    gsap.to('.scrub-slide', {
      scrollTrigger: {
        trigger: '.scrub-slide',
        start: '-200% 80%',
        end: '400% 80%',
        scrub: true
      },
      x: '-1000'
    })
  });
  return (
    <div id="review" className="section overflow-hidden">
   <div className="container">


      <h2 className="headline-2 mb-8  reveal-up">What my Clients say</h2>
      <div className=" scrub-slide flex items-stretch gap-3 w-fit ">
        {reviews.map(({ content, nameTag, imgSrc, company }, key) => (
          <ReviewCard 
          key={key}
          nameTag={nameTag}
          company={company}
          content={content}
          imgSrc={imgSrc}
          />
        ))}
      </div>
    </div>
    </div>
  );
}

export default Review;
