import React from "react";

import "./icons.scss";

//Font Awesome SVG. License https://creativecommons.org/licenses/by/4.0/
const SquareIcon = (props) => {
    const { href, size } = props;
    return (
        <a className="opposite-theme-fill opposite-theme-hover" href={href}>
            <svg className={ size + "-icon" } xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48z"/>
            </svg>
        </a>
    );
}

export default SquareIcon;