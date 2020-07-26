import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import MyAccount from "./navs/MyAccount";
import QuickActionsMenu from "./QuickActionsMenu";


export default class HeaderServices extends React.Component {
    render() {
        return  <div id={"main-panel"}>
            <Logo />
            <SearchBar />
            <MyAccount/>
            <QuickActionsMenu />
        </div>
    }
}