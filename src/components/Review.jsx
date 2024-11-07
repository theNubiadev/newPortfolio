import ReviewCard from "./ReviewCard";

const reviews = [
  {
    content:
      "Exceptional Web development? Delivered a seamless, responsive site with clean code and great UX",
    nameTag: "Sallie Njuku",
    imgSrc: "",
    company: "Chaos",
  },
  {
    content:
      "Exceptional Web development? Delivered a seamless, responsive site with clean code and great UX",
    nameTag: "Sallie Njuku",
    imgSrc: "",
    company: "Chaos",
  },
  {
    content:
      "Exceptional Web development? Delivered a seamless, responsive site with clean code and great UX",
    nameTag: "Sallie Njuku",
    imgSrc: "",
    company: "Chaos",
  },
  {
    content:
      "Exceptional Web development? Delivered a seamless, responsive site with clean code and great UX",
    nameTag: "Sallie Njuku",
    imgSrc: "",
    company: "Chaos",
  },
  {
    content:
      "Exceptional Web development? Delivered a seamless, responsive site with clean code and great UX",
    nameTag: "Sallie Njuku",
    imgSrc: "",
    company: "Chaos",
  },
];

function Review() {
  return (
    <div id="reviews" className="section overflow-hidden">
   <div className="container">


      <h2 className="headline-2 mb-8 ">What my Clients say</h2>
      <div className=" flex items-stretch gap-3 w-fit ">
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
