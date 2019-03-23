import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const Talks = () => {

    return (
        <Layout>
            <p className="text-m text-bold margin-t-zero">
                Upcoming Talks
            </p>
            <div className="margin-l-50 margin-b-50">
                <Link to="/" className="text-s text-no-decor link-hover-colour">
                    Lorem ipsum dolor sit amet
                </Link>
            </div>
            <p className="text-m text-bold margin-t-zero">
                Past Talks
            </p>
            <div className="margin-l-50 margin-b-50">
                <Link to="/" className="text-s text-no-decor link-hover-colour">
                    Lorem ipsum dolor sit amet
                </Link>
            </div>
        </Layout>
    );
}

export default Talks;