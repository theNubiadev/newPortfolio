import PropTypes from "prop-types";

function ButtonPrimary({
  href,
  target = "_self", // Corrected target default to match HTML spec
  label,
  icon,
  classes = "" // Default value to avoid undefined in concatenation
}) {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={"btn btn-primary " + classes} // Added space before classes
      >
        {label}
        {icon ? (
          <span className="btn-icon" aria-hidden="true">
            {icon}
          </span>
        ) : null}
      </a>
    );
  } else {
    return (
      <button className={"btn btn-primary " + classes}>
        {label}
      </button>
    );
  }
}

ButtonPrimary.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.node, // Changed to node, to allow React components as icons
  classes: PropTypes.string
};

function ButtonOutline({
  href,
  target = "_self",
  label,
  icon,
  classes = ""
}) {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={"btn btn-outline " + classes} // Added space before classes
      >
        {label}
        {icon ? (
          <span className="btn-icon" aria-hidden="true">
            {icon}
          </span>
        ) : null}
      </a>
    );
  } else {
    return (
      <button className={"btn btn-outline " + classes}>
        {label}
      </button>
    );
  }
}

ButtonOutline.propTypes = {
  label: PropTypes.string.isRequired,
  href: PropTypes.string,
  target: PropTypes.string,
  icon: PropTypes.node, // Changed to node, to allow React components as icons
  classes: PropTypes.string
};

export { ButtonPrimary, ButtonOutline };
