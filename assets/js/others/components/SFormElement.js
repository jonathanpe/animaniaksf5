import React from "react";
import SFormTextType from "./SFormTextType";

export default class SFormField extends React.Component {


    constructor(props) {
        super(props)
        console.log(this.props);
        this.id = this.props.id;
        this.attr = this.controlAttr(this.props.attr) ?? {};
    }

    controlClassNames( classNames ){
        if(typeof classNames !== 'string' && typeof classNames !== 'undefined' ) throw new Error('invalid className argument') ;

        if( typeof classNames === 'string' ){

            classNames =  classNames.split(' ').map( className => {
                if(  ! RegExp( /-?[_a-zA-Z]+[_a-zA-Z0-9-]*/ ).test( className ) ) throw new Error('invalid className argument')
                return className
            }).join(' ')
        }
        return classNames

    }



    controlAttr( attr ){


        if(typeof attr !== 'object' && typeof attr !== 'undefined' ) throw new Error('invalid Argument for Attr')
        if( typeof attr !== 'undefined' ){
            let attrNames = Object.keys( attr ) ;
            attrNames.forEach( attrName => {
                let attrVal = attr[ attrName ] ;
                if( attrName === 'class') attr[ attrName ] = this.controlClassNames( attrVal )
            })
        }
        return attr
    }
}