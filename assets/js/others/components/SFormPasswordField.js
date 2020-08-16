import React from "react";

import SFormField from "./SFormField";

export default class SFormPasswordField extends SFormField {

    constructor( props ) {
        super( props )
    }


    buildElement(){
        return <input type={"password"} id={ this.id } name={ this.fullName } required={ true } className={ this.attr.class } />
    }

    render() {
        return this.buildElement()
    }
}

