import React from "react";
import SFormType from "./SFormType";
import SFormCheckboxField from "./SFormCheckboxField";
export default class SFormCheckboxType extends SFormType {

    constructor( props ) {
        super( props )
        this.options = this.validateOptions( this.props.options ) ;
        this.renderField = <SFormCheckboxField name={ this.name } required={ this.options.required } id={ this.options.id } fullName={ this.fullName } label={ this.options.label } attr={ this.options.attr } value={ this.options.value } />
        this.createView = this.createView ?? this.defaultView
    }

    validateOptions( options ){
        return options ;
    }

    render() {
        return super.render()
    }
}


