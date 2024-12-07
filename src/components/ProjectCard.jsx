import PropTypes from "prop-types";
import { ArrowHorizontalIcon } from "hugeicons-react";
function ProjectCard({ imgSrc, title, tags, projectLink, classes }) {
  return (
    <div
      className={
        "relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors " +
        classes
      }
    >
      <figure className="img-box  rounded-lg">
        <img src={imgSrc} className="img-cover" alt={title} loading="lazy" />
      </figure>

      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="title-1 mb-3">{title}</h3>
          <div className="flex flex-wrap items-center gap-2">
            {tags.map((label, key) => (
              <span
                className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
                key={key}
              >
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="w-11 h-11 rounded-lg grid place-items-center bg-sky-400 text-zinc-950 shrink-0">
          <ArrowHorizontalIcon className="icons" aria-hidden="true" />
        </div>
      </div>

      <a href={projectLink} target="_blank" className="absolute inset-0"></a>
    </div>
  );
}

ProjectCard.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string.isRequired,
  projectLink: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  classes: PropTypes.string.isRequired,
};

export default ProjectCard;
