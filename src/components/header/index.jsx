import React from "react";
import "./header.scss";
import DesktopHeader from "./desktop-header";
import MobileHeader from "./mobile-header";

const Header = ({ theme, setTheme }) => {
    return (
        <header className="width-91 max-width-1440 margin-l-r-auto padding-t-50">
            <div className="nav-desktop">
                <DesktopHeader theme={theme} setTheme={setTheme} />
            </div>
            <div className="nav-mobile">
                <MobileHeader theme={theme} setTheme={setTheme} />
            </div>
        </header>
    );
}

export default Header;