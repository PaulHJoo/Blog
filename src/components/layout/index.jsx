import React, { useState } from "react";
import Header from "../header";
import ThemeSlider from "../theme-slider";

import "./layout.scss";
import Footer from "../footer";

const Layout = ({ children, isPost }) => {
    const width = isPost ? "910" : "1440";
    const [theme, setTheme] = useState("light");
    return (
        <div>
            <div>
                <Header theme={theme} setTheme={setTheme} />
                <div className={"width-90 margin-l-r-auto max-width-" + width}>
                    <div className="display-inline-block">
                        {children}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Layout;