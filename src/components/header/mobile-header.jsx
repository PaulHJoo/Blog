import React, { useState } from "react";
import { Link } from "gatsby";

import ThemeSlider from "../theme-slider";

const MobileHeader = ({ theme, setTheme }) => {
    const [showMobileNav, setShowMobileNav] = useState(false);
    const showMobileNavClass = showMobileNav === false ? "" : "nav-mobile-list-show";
    return (
        <div className="text-center">
            <Link to="/" className="text-l text-no-decor letter-spacing-3 hover-border text-light padding-10">
                PAUL H.J
            </Link>
            <div className="padding-t-10">
                <div className="align-center text-center">
                    <p className="mobile-header-font text-center text-light hover-border margin-zero padding-10 letter-spacing-3 display-inline-block cursor-pointer " onClick={() => setShowMobileNav(!showMobileNav)}>
                        MENU
                    </p>
                </div>
                <ul className={"nav-mobile-list text-center " + showMobileNavClass}>
                    <li className="padding-10 padding-t-15">
                        <Link to="/posts" className="text-sm text-no-decor text-light letter-spacing-3 hover-border padding-10">
                            POSTS
                        </Link>
                    </li>
                    <li className="padding-10">
                        <Link to="/about" className="text-sm text-no-decor text-light letter-spacing-3 hover-border padding-10">
                            ABOUT
                        </Link>
                    </li>
                    <li className="padding-10 padding-b-20">
                        <Link to="/talks" className="text-sm text-no-decor text-light letter-spacing-3 hover-border padding-10">
                            TALKS
                        </Link>
                    </li>
                </ul>
                <div className="padding-t-10 text-center">
                    <ThemeSlider theme={theme} setTheme={setTheme} />
                </div>
            </div>
        </div>
    );
}

export default MobileHeader;