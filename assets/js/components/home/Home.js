import React from "react";
import Header from "../layout/Header";
import LeftPanel from "./LeftPanel";
import MainContent from "./MainContent";
import HomeCarousel from "./HomeCarousel";
import Footer from "../layout/footer/Footer";

export default class Home extends React.Component {


    render() {

        console.log( storedfdff )
        debugger;
        return <div>
            <Header/>
                <div id={"home-container"} className={"home container"}>
                    <HomeCarousel />
                    <LeftPanel/>
                    <MainContent/>
                </div>
            <Footer />
        </div>

    }
}
