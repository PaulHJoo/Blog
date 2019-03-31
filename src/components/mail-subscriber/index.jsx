import React, { useState } from "react";

import "./mail-subscriber.scss";

const MailSubscriber = () => {
    const [email, setEmail] = useState("");
    const [emailStatus, setEmailStatus] = useState("");
    return (
        // <div className="mail-subscriber width-300 height-150 margin-l-r-auto text-center">
        //     <p className="margin-zero padding-t-10">
        //         Join for email updates.
        //     </p>
        //     <input className="mail-input text-center width-100 padding-zero" placeholder="Email Address" type="text" />
        //     <p className="mail-button text-s">
        //         Subscribe
        //     </p>
        // </div>
        <div className="mail-subscriber width-300 height-150 margin-l-r-auto text-center">
            <p className="margin-zero padding-t-10">
                Join for email updates.
                </p>
            <input className="mail-input text-center width-100 padding-zero" value={email} onChange={e => setEmail(e.target.value)} name="EMAIL" placeholder="Email Address" required />
            <div className="bot-sign" aria-hidden="true">
                <input type="text" name="b_c62f52a2675eb21b0f9d31f4b_e4a4b6be84" tabIndex="-1" />
            </div>
            <p onClick={() => SubscribeToList(email, setEmailStatus)} className="mail-button text-s">
                Subscribe
            </p>
            <p className="margin-t-10">
                {emailStatus}
            </p>
        </div>
    );
}

const SubscribeToList = (email, setEmailStatus) => {
    if (!email.includes("@" && ".")) {
        setEmailStatus("Please enter a valid email address.");
        return;
    }

    var splitEmail = email.split('@');
    if (splitEmail[0].length === 0 || splitEmail[1].length === 0) {
        setEmailStatus("Please enter a valid email address.");
        return;
    }

    fetch(`https://paulhjmailfunction.azurewebsites.net/api/MailFunction?email=${email}`, {
        method: "POST",
        cors: "cors"
    })
        .then(function (response) {
            if (response.status === 200) {
                setEmailStatus("Confirmation email has been sent.")
            } else {
                setEmailStatus("Something went wrong. Please try again.");
            }
        })
        .catch(function (err) {
            setEmailStatus("Something went wrong. Please try again.");
        });
}

export default MailSubscriber;