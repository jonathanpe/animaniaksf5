import React from "react";

import SFormEntry from "./SFormEntry";
import DefaultTheme from "./DefaultTheme";

export default class SForm extends React.Component {

    constructor( props ){
        super( props ) ;
        this.theme = this.props.theme ?? DefaultTheme ;
        console.log(this.theme)
        this.schema = this.props.schema ;
        this.custom = this.controlCustom() ;
        this.baseForm = this.controlBaseForm( this.props.baseForm ) ?? this.defaultForm ;
    }

    controlBaseForm( baseForm ){
        return baseForm
    }
    controlCustom(){
        let custom = this.props.custom ;

        if( typeof custom !== 'object') throw new Error ('invalid custom Value') ;

        let customKeys = Object.keys( custom )
        customKeys.forEach( customKey => {
            if(  ! RegExp(/^[a-z][A-Za-z.]*[A-Za-z]$/ ).test( customKey ) ) throw new Error('invalid custom argument')
        }) ;

        return custom
    }
    defaultForm( renderFields ){

        console.log( this.schema )
        return <form id={ this.schema.id } name={this.schema.name} >
            { renderFields }
        </form>
    }

    getComponent( type ){
       console.log('type');
       console.log(this.theme)
        console.log(this.theme[type]);
        debugger;
        return this.theme[ type ]
    }

 /*   genereSFormChamp( property ){
        console.log(property);
        debugger;
        return <div>
            <label htmlFor={ property.id }>{ property.name }</label>
            <SFormField component={ this.getComponent( property.type ) } label={ property.label } name={ property.name } required={ property.required } id={ property.id } placeholder={ property.placeholder } description={ property.description } type={ property.type } />
        </div>
    }*/

    /*genreSFormChoiceContainer( property ){
        switch( property ){
            case :
        }
    }*/

    genereSFormEntries( properties ){

      console.log( properties )
        console.log('theproperty')
        return Object.keys( properties ).map( propertyName => {
            let propertyValues = properties[ propertyName ]
            let custom = this.custom[ `form.${ propertyName }`] ?? null  ;

            return <SFormEntry component={ this.getComponent( propertyValues.type ) } options={propertyValues.options} name={ propertyValues.name } fullName={ propertyValues.full_name  } type={ propertyValues.type } custom={ custom }/>
        })
    }


    render() {
        return this.baseForm( this.genereSFormEntries( this.schema.properties ) )
    }
    /*render() {


        return <form id={this.mainClassName} className={"window " + this.mainClassName + "__window " + this.additionnalClassNames  }>
            <div id={this.mainClassName + "__header"} className={"label-header bottom-bordered--large "}>
                <h2>{this.title}</h2>
            </div>

            <div className={"window__main " + this.mainClassName + "__main"} id={this.mainClassName + "__main"}>
                { this.windowContent }
            </div>
        </form>

    }*/
    /* return <section id={"auth__"+ this.authClassName } className={"auth__window"}>
         <div id={"auth__" + this.authClassName + "__header"} className={"label-header bottom-bordered--large "}>
             <h2>{ this.authTitle }</h2>
         </div>
         <div className={"auth__main"} id={"auth__" + this.authClassName + "__main"}>
             <form className={"auth__form auth__"+this.authClassName+"__form"}>
                 <div className={"auth__form__choices auth__" + this.authClassName + "__form__choices"}>
                     { this.authFormChoicesContent }
                 </div>
                 <button className={"auth__form__comfirm auth__" + this.authClassName + "__form__comfirm btn--classic--black"}> { this.authAction }</button>
             </form>
         </div>
     </section>*/

}