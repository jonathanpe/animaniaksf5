import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import QuickActionsMenu from "./QuickActionsMenu";
import MyAccount from "./navs/MyAccount";

export default class MainPanel extends React.Component {
    render() {
        return <div id={"main-panel"}>
                <Logo />
                <SearchBar />
                <MyAccount/>
                <QuickActionsMenu />
            </div>
    }
}
