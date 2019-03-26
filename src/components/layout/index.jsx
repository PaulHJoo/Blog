import React, { useState } from "react";
import Header from "../header";

import "./layout.scss";
import Footer from "../footer";

const Layout = ({ children, isPost }) => {
    const width = isPost ? "910" : "1440";
    const [theme, setTheme] = useState("light");
    return (
        <div>
            <div>
                <Header theme={theme} setTheme={setTheme} />
                <div className={"layout-width margin-l-r-auto max-width-" + width}>
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Layout;