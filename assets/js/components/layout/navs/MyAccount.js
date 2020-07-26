import React from "react";

export default class MyAccount extends React.Component {
    render() {
        return <div id="top-nav__my-account">
            <a>
                <div id="top-nav__my-account__icon">
                    <i className="fal fa-user"></i>
                </div>

                <div id="top-nav__my-account__infos__wrapper">
                    <div id="top-nav__my-account__infos">
                        <span id="top-nav__my-account__infos__id">Jonathan</span>
                        <span id="top-nav__my-account__infos__points">4620 points</span>
                    </div>
                    <span id="top-nav__my-account_unwrap-nav"><i className="fal fa-angle-down"></i></span>
                </div>
            </a>
            <nav id="top-nav__my-account__nav">
                <ul>
                    <li>Mon compte</li>
                    <li>Deconnexion</li>
                </ul>
            </nav>
        </div>
    }
}

