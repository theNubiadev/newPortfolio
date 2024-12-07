import PropTypes from "prop-types";

function SkillCard({ label, desc, classes , imgSrc}) {
  return (
    <div
      className={
        "flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group" +
        classes
      }
    >
      <figure className="bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900">
        <img src={imgSrc} alt="" width={32} height={32} />
      </figure>

      <div>
        <h3>{label}</h3>
        <p className="text-zinc-400 text-sm">{desc}</p>
      </div>
    </div>
  );
}

SkillCard.propTypes = {
  label: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  classes: PropTypes.string,
  imgSrc: PropTypes.string,
};

export default SkillCard;
