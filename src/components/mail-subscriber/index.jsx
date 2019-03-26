import React from "react";

import "./mail-subscriber.scss";

const MailSubscriber = () => {

    return (
        <div className="mail-subscriber width-300 height-150 margin-l-r-auto text-center">
            <p className="margin-zero padding-t-10">
                Join for email updates.
            </p>
            <input className="mail-input text-center width-100 padding-zero" placeholder="Email Address" type="text" />
            <p className="mail-button text-s">
                Subscribe
            </p>
        </div>
    );
}

export default MailSubscriber;