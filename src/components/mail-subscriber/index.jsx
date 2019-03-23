import React from "react";

import "./mail-subscriber.scss";

const MailSubscriber = () => {

    return (
        <div className="mail-subscriber width-300 height-150 margin-l-r-auto text-center">
            <p className="margin-zero padding-t-10">
                Join for email updates.
            </p>
            <input className="mail-input width-100 padding-zero margin-b-15" placeholder="Email Address" type="text" />
            <a className="mail-button text-s">
                Subscribe
            </a>
        </div>
    );
}

export default MailSubscriber;