import PropTypes from "prop-types";


function ButtonPrimary( {
        href, 
        target = 'self',
        label,
        icon,
        classes
}) {
   if (href) {
    return (
        <a href={href}
        target={target}
        className={"btn btn-primary" + classes}
        > {label} {icon ? 

        <span className="btn-icon" aria-hidden="true">
        {icon}
        </span>
       : undefined }
        
        </a>
    ) } else {
        return (
            <button className={"btn btn-primary " + classes}>
                {label}
            </button>
        )
    }
   }
  
ButtonPrimary.propTypes = {
    label: PropTypes.string.isRequired,
    href: PropTypes.string,
    target: PropTypes.string,
    icon: PropTypes.string,
    classes: PropTypes.string
}

function ButtonOutline( {
    href, 
    target = 'self',
    label,
    icon,
    classes
}) {
if (href) {
return (
    <a href={href}
    target={target}
    className={"btn btn-outline" + classes}
    > {label} {icon ? 

    <span className="btn-icon" aria-hidden="true">
    {icon}
    </span>
   : undefined }
    
    </a>
) } else {
    return (
        <button className={"btn btn-outline " + classes}>
            {label}
        </button>
    )
}
}

ButtonOutline.propTypes = {
label: PropTypes.string.isRequired,
href: PropTypes.string,
target: PropTypes.string,
icon: PropTypes.string,
classes: PropTypes.string
}


export {
    ButtonPrimary,
    ButtonOutline
}