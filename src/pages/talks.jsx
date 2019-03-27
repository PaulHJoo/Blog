import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

import "./talks.scss";

const Talks = () => {

    return (
        <Layout>
            <p className="text-m text-light margin-t-zero">
                Upcoming Talks
            </p>
            <div className="talk-list">
                <Link to="/" className="text-s text-light text-no-decor link-hover-colour">
                    Lorem ipsum dolor sit amet
                </Link>
            </div>
            <p className="text-m text-light margin-t-zero">
                Past Talks
            </p>
            <div className="talk-list">
                <Link to="/" className="text-s text-light text-no-decor link-hover-colour">
                    Lorem ipsum dolor sit amet
                </Link>
            </div>
        </Layout>
    );
}

export default Talks;