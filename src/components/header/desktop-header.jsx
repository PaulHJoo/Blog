import React from "react";
import { Link } from "gatsby";
import ThemeSlider from "../theme-slider";

const DesktopHeader = ({ theme, setTheme }) => {
    return (
        <div>
            <div className="display-inline-block">
                <Link to="/" className="text-l text-no-decor letter-spacing-3 text-light link-hover-colour">
                    PAUL H.
                </Link>
                {/* <ThemeSlider theme={theme} setTheme={setTheme} /> */}
            </div>
            <div className="display-inline-block float-right padding-t-10">
                <Link to="/posts" className="text-sm text-no-decor letter-spacing-3 hover-outline margin-r-50 text-light">
                    POSTS
                </Link>
                <Link to="/about" className="text-sm text-no-decor letter-spacing-3 link-hover-colour margin-r-50 text-light">
                    ABOUT
                </Link>
                <Link to="/talks" className="text-sm text-no-decor letter-spacing-3 link-hover-colour text-light">
                    TALKS
                </Link>
            </div>
        </div>
    );
}

export default DesktopHeader;