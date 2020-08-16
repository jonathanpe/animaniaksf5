import React from "react";
import SFormElement from "./SFormElement";
import SFormLabel from "./SFormLabel";

export default class SFormType extends React.Component{

    constructor( props ) {
        super(props)
        this.name = this.props.name  ;
        this.fullName = this.props.fullName ;
        this.options = this.props.options
        this.type = this.props.type ;
        this.createView = this.controlCreatedView( this.props.createView ) ?? this.defaultView ;
        this.custom = this.controlCustom( this.props.custom ) ?? {};
        this.renderLabel =  this.options.label ? <SFormLabel label={ this.options.label } htmlFor={ this.options.id }/> : null
        this.createView = this.createView ?? this.defaultView
    }

    controlCreatedView( createView ){
        if( typeof createView == 'function' && typeof createView !== 'undefined') throw new Error ('invalid argument for CreateView') ;

        return createView ;
    }
    controlCustom( custom ){
        if( typeof custom  !== 'object'  && typeof custom !== 'undefined' ) throw new Error('invalid Argument for Custom') ;
        if( custom ){

            let customKeys = Object.keys( custom ) ;

            customKeys.forEach( customKey => {
                let customValue = custom[ customKey ];
                if( customKey === 'attr' ){
                    this.options.attr = { ...this.options.attr, ...custom[ customKey ] }
                }
                else if( customKey === 'createView' ){
                    this.createView = custom[ customKey ]
                }
            })
        }
        return custom ;
    }


    generateChoiceField(){

    }

    defaultView( renderField, renderLabel ){

        return <div >
            { renderField }
            { renderLabel }
        </div>
    }

    render() {
        return this.createView( this.renderField, this.renderLabel )
    }
}