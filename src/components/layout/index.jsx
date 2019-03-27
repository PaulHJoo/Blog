import React, { useState } from "react";
import Header from "../header";

import "./layout.scss";
import Footer from "../footer";
import SEO from "../seo";

const Layout = ({ children, isPost, title, description, keywords }) => {
    const width = isPost ? "910" : "1440";
    const [theme, setTheme] = useState("light");
    return (
        <div>
            <SEO 
                lang="en"
                title={title}
                description={description}
                keywords={keywords}/>
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