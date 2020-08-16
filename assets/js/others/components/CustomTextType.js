import React from "react";
import SFormType from "./SFormType";

export default class CustomTextType extends SFormTextType {

    constructor( props ) {
        super( props )
        this.renderField = <input type={"text"} id={ this.id } name={ this.name } required={ this.required } />

    }

    buildElement(){

        console.log(this.label);
        return <div>
            { this.renderField }
            { this.renderLabel }
        </div>
    }

    render() {
        return this.buildElement()
    }
}

