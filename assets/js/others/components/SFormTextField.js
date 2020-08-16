import React from "react";

import SFormField from "./SFormField";

export default class SFormTextField extends SFormField {

    constructor( props ) {
        super( props )
    }


    buildElement(){
        return <input type={"text"} id={ this.id } name={ this.fullName } required={ this.required } className={ this.attr.class } />
    }

    render() {
        return this.buildElement()
    }
}

