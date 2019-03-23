import React, { useState } from "react";
import { Link } from "gatsby";

import ThemeSlider from "../theme-slider";

const MobileHeader = ({ theme, setTheme }) => {
    const [showMobileNav, setShowMobileNav] = useState(false);
    const showMobileNavClass = showMobileNav === false ? "" : "nav-mobile-list-show";
    return (
        <div>
            <Link to="/" className="text-l text-no-decor letter-spacing-3 text-light link-hover-colour">
                PAUL H.
            </Link>
            <div className="align-center text-center">
                <a className="text-m text-center text-light letter-spacing-3 display-inline-block" onClick={() => setShowMobileNav(!showMobileNav)}>
                    MENU
                    </a>
            </div>
            <ul className={"nav-mobile-list text-center " + showMobileNavClass}>
                <li>
                    <Link to="/posts" className="text-sm text-no-decor text-light letter-spacing-3 link-hover-colour">
                        POSTS
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="text-sm text-no-decor text-light letter-spacing-3 link-hover-colour">
                        ABOUT
                    </Link>
                </li>
                <li>
                    <Link to="/talks" className="text-sm text-no-decor text-light letter-spacing-3 link-hover-colour">
                        TALKS
                    </Link>
                </li>
            </ul>
            <div className="padding-t-10 text-center">
                <ThemeSlider theme={theme} setTheme={setTheme} />
            </div>
        </div>
    );
}

export default MobileHeader;