import React from "react";
import SFormTextType from "./SFormTextType";
import SFormElement from "./SFormElement";

export default class SFormChoiceField extends SFormElement {


    constructor(props) {
        super(props)
        this.multiple = false ;
        this.expanded = false;
        this.choiceType = 'text';
    }


    setChoiceType( choiceType ){
        const availableChoiceTypes = [ 'text', 'number','boolean' ] ;
        if( typeof choiceType !== 'string' || ( availableChoiceTypes.includes( choiceType ) )  )throw new Error('invalid ChoiceType')
    }

    generateChoiceField(){
        switch( this.choiceType ){
            case 'text' :
            case 'number' : {
                if( this.multiple ) return <select name="pets" id="pet-select">

                </select>
            }
        }
    }

    genereMultipleChoices(){
        return <select name="pets" id="pet-select">
            this.choi
        </select>
    }


    controlInput( input ) {
        console.log( input) ;
    }
    controlLabel( label ){

        if(typeof label !== 'string' ||  ! RegExp( /-?[_a-zA-Z]+[_a-zA-Z0-9-]*/ ).test( label ) ) throw new Error('invalid Argument for Label') ;

        return label
    }

    render(){
        return <label htmlFor={ this.id }>{ this.label }</label>
    }
}