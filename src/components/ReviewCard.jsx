import PropTypes from "prop-types"
import { StarFaceIcon } from "hugeicons-react";

    const ratings = new Array(5);
        ratings.fill({
        icon: <StarFaceIcon/>,
        style: {fontVariationSettings: '"FILL" 1'}
});
// console.log(ratings);

function ReviewCard({
    content,
    nameTag,
    // imgSrc,
    company
}) {
  return (
        <div className="bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px]">

            <div className="flex items-center gap-1 mb-3 "> 
            {ratings.map(({icon, style}, key ) => {
                <span
                    key={key} 
                    className="icons text-yellow-300 text-[18px]"
                    style={style}>  
                    {icon}
                </span>
            })}    
             </div>

             <p className="text-zinc-400 mb-8 ">{content}</p>
             <div className="flex items-center gap-2 mt-auto">
                <figure className="img-box rounded-lg">
                    <img 
                    // src={imgSrc} 
                    width={44}
                    height={44}
                    className="img-cover" 
                    alt="" 
                    loading="lazy"/>
                </figure>

                <div>
                    <p className="text-xs text-zinc-400 tracking-wider">{nameTag}</p>
                    <p className="">{company}</p>
                </div>
             </div>
        </div>
    
  )
}
ReviewCard.propTypes = {
    content: PropTypes.string.isRequired,
    nameTag: PropTypes.string.isRequired,
    // imgSrc: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired
}

export default ReviewCard