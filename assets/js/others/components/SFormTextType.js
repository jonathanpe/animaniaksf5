import React from "react";
import SFormType from "./SFormType";
import SFormTextField from "./SFormTextField";

export default class SFormTextType extends SFormType {

    constructor( props ) {
        super( props )
        this.options = this.validateOptions( this.props.options ) ;
        this.renderField = <SFormTextField name={ this.name } required={ this.options.required } id={ this.options.id } fullName={ this.fullName } label={ this.options.label } attr={ this.options.attr } value={ this.options.value } />
    }

    validateOptions( options ){
        return options ;
    }
    buildElement(){

        console.log(this.label);
        return <div>
            { this.renderLabel }
            { this.renderField }
        </div>
    }

    render() {
        return this.createView( this.renderField, this.renderLabel )
    }
}


