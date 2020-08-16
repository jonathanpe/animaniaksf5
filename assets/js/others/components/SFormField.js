import React from "react";
import SFormTextType from "./SFormTextType";
import SFormElement from "./SFormElement";
import SFormLabel from "./SFormLabel";

export default class SFormField extends SFormElement {

    constructor(props) {
        super(props)
        this.name = this.props.name ;
        this.required = this.props.required ;
        this.placeholder = this.props.placeholder ;
        this.description = this.props.description ;
        this.type = this.props.type ;
        this.fullName = this.props.fullName ;
        this.value = this.props.value ;
    }

}