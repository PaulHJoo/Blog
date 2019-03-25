import React from "react";
import { Link } from "gatsby";
import ThemeSlider from "../theme-slider";

const DesktopHeader = ({ theme, setTheme }) => {
    return (
        <div>
            <div>
                <div className="display-inline-block margin-l-n-10">
                    <Link to="/" className="text-l text-no-decor letter-spacing-3 text-light hover-border padding-10">
                        PAUL H.J
                    </Link>
                </div>
                <div className="display-inline-block float-right padding-t-10">
                    <Link to="/posts" className="item-margin text-sm text-no-decor letter-spacing-3 hover-border padding-10 text-light">
                        POSTS
                    </Link>
                    <Link to="/about" className="item-margin text-sm text-no-decor letter-spacing-3 hover-border padding-10 text-light">
                        ABOUT
                    </Link>
                    <Link to="/talks" className="text-sm text-no-decor letter-spacing-3 hover-border padding-10 text-light">
                        TALKS
                    </Link>
                </div>
            </div>
            <div className="margin-l-6 padding-t-15">
                <ThemeSlider theme={theme} setTheme={setTheme} />
            </div>
        </div>
    );
}

export default DesktopHeader;