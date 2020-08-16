import React from "react";
import Header from "../../components/layout/Header";
import AuthForm from "./AuthForm";
import Footer from "../../components/layout/footer/Footer";

import "../../../scss/auth/subscribe.scss"
import SForm from "../../others/components/SForm";
import CustomTheme from "../../others/components/CustomTheme";

console.log( 'subscribe ')
export default class Subscribe extends React.Component {


    constructor(props) {
        super(props)
        this.form = this.props.form ;
        console.log(  'test') ;
        console.log(this.form);
    }

    buildSubscribeFormChoicesContent( className ){

        return <>
            { this.form }
            /*<AuthForm schema={ schema } authClassName={"auth__subscribe"} authFormChoicesContent={this.buildSubscribeFormChoicesContent( 'subscribe' )} authTitle={"Inscription"} authAction={"Sinscrire"}/>*/
          /* <div className={"auth__"+className+"__form__field form__field --large bottom-bordered--thin floating-label"} >
                <input type="text" name={"auth__" + className + "__form__field__email" } className={"form__input--large label-container"} required />
                <label className={"floating-label"} htmlFor={"auth__" + className + "__form__field__email" + className }>Nom</label>
            </div>
            <div className={"auth__"+className+"__form__field form__field --large bottom-bordered--thin floating-label"} >
                <input type="text" name={"auth__" + className + "__form__field__email" } className={"form__input--large label-container"} required />
                <label className={"floating-label"} htmlFor={"auth__" + className + "__form__field__email" + className }>Prenom</label>
            </div>
            <div className={"auth__"+className+"__form__field form__field --large bottom-bordered--thin floating-label"} >
                <input type="text" name={"auth__" + className + "__form__field__email" } className={"form__input--large label-container"} required />
                <label className={"floating-label"} htmlFor={"auth__" + className + "__form__field__email" + className }>Email</label>
            </div>
            <div className={"auth__"+className+"__form__field form__field --large bottom-bordered--thin floating-label"} >
                <input type="text" name={"auth__" + className + "__form__field__email" } className={"form__input--large label-container"} required />
                <label className={"floating-label"} htmlFor={"auth__" + className + "__form__field__email" + className }>Nom d'utilisateur</label>
            </div>
            <div className={"auth__"+className+"__form__field form__field --large bottom-bordered--thin floating-label"} >
                <input type="text" name={"auth__" + className + "__form__field__email" } className={"form__input--large label-container"} required />
                <label className={"floating-label"} htmlFor={"auth__" + className + "__form__field__email" + className }>Mot de passe</label>
            </div>
            <div className={"auth__"+className+"__form__field form__field --large bottom-bordered--thin floating-label"} >
                <input type="text" name={"auth__" + className + "__form__field__email" } className={"form__input--large label-container"} required />
                <label className={"floating-label"} htmlFor={"auth__" + className + "__form__field__email" + className }>Comfirmer le mot de passe</label>
            </div>
            <div className={"auth__login__form__field form__field"} >
                <input type="checkbox" name={"auth__login__form__field__remember-me"} className={"form__input--large label-container"} required />
                <label htmlFor={"auth__login__form__field__password"}>Recevoir notre newsletter</label>
            </div>*/
        </>
    }

    generateCustom( properties ){
        let custom = {} ;
        Object.keys( properties ).forEach( propertyName => {
            let propertyValue = properties[ propertyName ] ;

            let className = 'auth__subscribe__form__field form__field' ;
            if( propertyValue.type !== 'checkbox' && propertyValue.type !== 'hidden' ) className += ' --large bottom-bordered--thin floating-label' ;

            console.log(propertyName);

            debugger;
            custom[`form.${propertyName}`] = {
                attr: {class: 'form__input--large label-container'},
                createView: (renderField, renderLabel) => {
                    return <div
                        className={className}>
                        {renderField}
                        {renderLabel}
                    </div>
                },
            }
        }) ;
        return custom
    }


    render() {


        let schema = JSON.parse( this.props.schema ) ;
        return <div>
            <Header/>
            <div id={"auth-container"} className={"container"} >
                <AuthForm schema={ schema }  theme={ CustomTheme } authTitle={ 'Inscription' } authClassName={ 'subscribe' }  authAction={ 'S\'inscrire' } custom={ this.generateCustom( schema.properties) }/>
            </div>
            <Footer />
        </div>
    }

}
