import React from "react";
import FooterGaranties from "./FooterGaranties";
import "../../../../scss/layout/footer.scss" ;


export default class Footer extends React.Component {
    render() {
        return <div id={"footer"}>
            <FooterGaranties/>
        </div>
    }
}
