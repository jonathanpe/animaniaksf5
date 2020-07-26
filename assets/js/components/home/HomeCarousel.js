import React from "react";
import 'react-awesome-slider/dist/styles.css';
import withAutoplay from 'react-awesome-slider/dist/autoplay'
import AwesomeSlider from 'react-awesome-slider'

import '../../../scss/home/carousel.scss';
const AutoplaySlider = withAutoplay(AwesomeSlider);



export default class HomeCarousel extends React.Component {
    render() {
        
        return <div id={"home__carousel"} >
            <AutoplaySlider
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={6000}
            >
                <div data-src="build/images/goodsmilebanner.jpg" />
                <div data-src="build/images/popbanner.jpg" />
                <div data-src="build/images/banprestobanner.jpg" />

            </AutoplaySlider>
        </div>
    }
}


