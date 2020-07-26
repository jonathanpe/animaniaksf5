import React from "react";
import InfosNav from "./InfosNav";
import MyAccount from "./MyAccount";

export default class TopNav extends React.Component {
    render() {
        return <div id="top-nav__container">
            <div id="top-nav">
                    <div id="top-nav__menu">
                        <InfosNav/>
                    </div>
                </div>
        </div>
    }
}
