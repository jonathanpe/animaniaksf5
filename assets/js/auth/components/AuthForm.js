import React from "react";
import Window from "../../others/components/Windows";
import Liform from "liform-react";
import SForm from "../../others/components/SForm";
import CustomTheme from "../../others/components/CustomTheme";


export default class AuthForm extends React.Component {

     constructor( props ){
        super( props ) ;

         this.authClassName = this.props.authClassName ;
         this.authTitle = this.props.authTitle ;
         this.authAction = this.props.authAction ;
         this.authFormChoicesContent = this.props.authFormChoicesContent
         this.schema = this.props.schema ;
         this.theme = this.props.theme ;
         this.custom = this.props.custom ;

     }

     buildBaseForm( renderFields ){

         console.log(this.schema);
         debugger;
         return <form className={"auth__form auth__"+this.authClassName+"__form"} name={this.schema.name} method={ 'POST' }>
              <div className={"auth__form__choices auth__" + this.authClassName + "__form__choices"}>
                  { renderFields }
              </div>
              <button type="submit" className={"auth__form__comfirm auth__" + this.authClassName + "__form__comfirm btn--classic--black"}> { this.authAction }</button>
        </form>
     }

     buildContent(){

         return <SForm schema={ this.schema }  theme={ this.theme } custom={ this.custom } baseForm={ this.buildBaseForm.bind(this) }/>
         //return <SForm schema={ this.schema }/>



       /*  <form className={"auth__form auth__"+this.authClassName+"__form"}>
             <div className={"auth__form__choices auth__" + this.authClassName + "__form__choices"}>

             </div>
             <button className={"auth__form__comfirm auth__" + this.authClassName + "__form__comfirm btn--classic--black"}> { this.authAction }</button>
         </form>*/
     }
    render() {

        return  <Window title={ this.authTitle } windowContent={ this.buildContent() } mainClassName={ 'auth__'+this.authClassName }  additionnalClassNames={ 'form-window' } />


       /* <section id={"auth__"+ this.authClassName } className={"auth__window"}>
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
   /* render() {


    return <section id={"auth__"+ this.authClassName } className={"auth__window"}>
            <div id={"auth__" + this.authClassName + "__header"} className={"label-header bottom-bordered--large "}>
            <h2>{ this.authTitle }</h2>
            </div>
            <div className={"auth__main"} id={"auth__" + this.authClassName + "__main"}>

            </div>
    </section>

    }*/
}