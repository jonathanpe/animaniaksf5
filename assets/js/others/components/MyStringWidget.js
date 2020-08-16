import React from "react";
import SFormType from "./SFormType";
import SFormTextType from "./SFormTextType";

import SFormTextField from "./SFormTextField";
export default class MyStringWidget extends SFormTextType {

    constructor( props ) {
        super( props )
        this.createView = this.createView ?? this.defaultView
    }

    render() {
        console.log(this.createView)
        return this.createView( this.renderField, this.renderLabel )
    }
}

