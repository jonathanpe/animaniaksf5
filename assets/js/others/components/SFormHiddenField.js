import React from "react";

import SFormField from "./SFormField";

export default class SFormHiddenField extends SFormField {

    constructor( props ) {
        super( props )
    }


    buildElement(){

        return <input type={"hidden"} id={ this.id } name={ this.fullName } required={ true } className={ this.attr.class } value={ this.value }/>
    }

    render() {
        return this.buildElement()
    }
}

