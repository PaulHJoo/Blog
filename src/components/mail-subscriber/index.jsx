import React, { useState } from "react";

import "./mail-subscriber.scss";

const MailSubscriber = () => {
    const [email, setEmail] = useState("");
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
            <form action="https://gmail.us20.list-manage.com/subscribe/post?u=c62f52a2675eb21b0f9d31f4b&amp;id=e4a4b6be84" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank" noValidate>
                <p className="margin-zero padding-t-10">
                    Join for email updates.
                </p>
                <input className="mail-input text-center width-100 padding-zero" value={email} onChange={e => setEmail(e.target.value)} type="email" name="EMAIL" placeholder="Email Address" required />
                <div className="bot-sign" aria-hidden="true">
                    <input type="text" name="b_c62f52a2675eb21b0f9d31f4b_e4a4b6be84" tabIndex="-1"/>
                </div>
                <div onClick={() => SubscribeToList(email)} className="mail-button text-s">
                    Subscribe
                </div>
            </form>
    </div>
    );
}

const SubscribeToList = (email) => {
    fetch(`https://paulhjmailfunction.azurewebsites.net/api/MailFunction?code=ddqxs8RkhakxFOxJr4LjkV8G9gIEe6jq9R1STx3mXGrTXN1Nb3Y3Ag==&email=${email}`)
        .then(function(response) {
            console.log(response);
        })
        .catch(function(err) {
            console.log(err);
        });
}

export default MailSubscriber;