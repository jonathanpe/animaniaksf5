import React from "react";
import HomeCarousel from "./HomeCarousel";
import HomeMainSection from "./HomeMainSection";


export default class MainContent extends React.Component {
    render() {
        return <div id={"home__main-content"}>
            <HomeMainSection
                title={"Nouveaute"}
            />
            <HomeMainSection
                title={"Recommandé pour vous"}
            />
        </div>
    }
}
