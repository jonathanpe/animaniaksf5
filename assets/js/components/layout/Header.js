import React from "react";
import TopNav from "./navs/TopNav";
import MainPanel from './MainPanel';
import MainNav from './navs/MainNav';
import HeaderServices from "./HeaderServices";


export default class Header extends React.Component {
    render() {
        return <header>
            <HeaderServices/>
            <MainNav />
        </header>;
    }
}
