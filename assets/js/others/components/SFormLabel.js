import React from "react";
import SFormTextType from "./SFormTextType";
import SFormElement from "./SFormElement";

export default class SFormLabel extends SFormElement {


    constructor(props) {
        super(props)
        this.htmlFor = this.controlHtmlFor( this.props.htmlFor ) ?? null ;
        this.input = this.controlInput( this.props.input ) ?? null ;
        this.label = this.controlLabel( this.props.label) ?? null ;
    }


    controlInput( input ) {
        console.log( input) ;
    }

    controlHtmlFor( htmlFor ){
        if( ( typeof htmlFor !== 'string' ||  ! RegExp( /-?[_a-zA-Z]+[_a-zA-Z0-9-]*/ ).test( htmlFor ) ) && typeof htmlFor !== 'undefined' ) throw new Error('invalid Argument for htmlFor') ;

        return htmlFor
    }
    controlLabel( label ){

        console.log( 'label' )
        console.log(label)
        if(typeof label !== 'string' ||  ! RegExp( /-?[_a-zA-Z]+[_a-zA-Z0-9-]*/ ).test( label ) ) throw new Error('invalid Argument for Label') ;

        return label
    }

    render(){
        return <label htmlFor={ this.htmlFor }>{ this.label }</label>
    }
}