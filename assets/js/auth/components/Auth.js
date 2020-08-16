import React from "react";

import Header from "../../components/layout/Header";
import Footer from "../../components/layout/footer/Footer";
import AuthLoginForm from "./AuthLoginForm";
import Container from "../../general/components/Container";
import AuthForm from "./AuthForm";
import CustomTheme from "../../others/components/CustomTheme";
import  UserContext  from "../../general/components/UserContext";

export default class Auth extends React.Component {

    static contextType = UserContext ;
    constructor( props ) {
        super( props )
        this.loginForm = this.props.loginForm
    }

    // buildLoginFormChoicesContent( className ){
    //
    //     return <>
    //         <div className={"auth__"+className+"__form__field form__field --large bottom-bordered--thin floating-label"} >
    //                 <input type="text" name={"auth__" + className + "__form__field__login" } className={"form__input--large label-container"} required />
    //                 <label className={"floating-label"} htmlFor={"auth__" + className + "__form__field__login" }>Nom d'utilisateur</label>
    //         </div>
    //         <div className={"auth__" + className + "__form__field form__field bottom-bordered--thin floating-label"} >
    //
    //             <input type="text" name={"auth__" + className + "__form__field__password"} className={"form__input--large label-container"} required />
    //             <label className={"floating-label"} htmlFor={"auth__" + className + "__form__field__password"}>Mot de passe</label>
    //         </div>
    //         <div className={"auth__" + className + "__form__field form__field"} >
    //             <input type="checkbox" name={"auth__" + className + "__form__field__remember-me"} className={"form__input--large label-container"} required />
    //             <label htmlFor={"auth__" + className + "__form__field__password"}>Se souvenir de moi</label>
    //         </div>
    //     </>
    // }
    // buildSubscribeFormChoicesContent( className ){
    //
    //     return <>
    //         <div className={"auth__"+className+"__form__field form__field --large bottom-bordered--thin floating-label"} >
    //             <input type="text" name={"auth__" + className + "__form__field__email" } className={"form__input--large label-container"} required />
    //             <label className={"floating-label"} htmlFor={"auth__" + className + "__form__field__email" + className }>Email</label>
    //         </div>
    //     </>
    // }

    genereteLoginCusom( properties ){
        let custom = {} ;
        Object.keys( properties ).forEach( propertyName => {
            let propertyValue = properties[ propertyName ] ;

            let className = 'auth__login__form__field form__field' ;
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
       const store = ReactOnRails.getStore("store") ;
       console.log( store )

        debugger;
        let loginForm = JSON.parse( this.loginForm )
        console.log(loginForm);
        return <div>
            <Header/>
            <div id={"auth-container"} className={"container"} >
                <AuthForm schema={ loginForm }  theme={ CustomTheme } authTitle={ 'Connection' } authClassName={ 'connect' }  authAction={ 'Se connecter' } custom={ this.genereteLoginCusom( loginForm.properties) }/>
            </div>
            <Footer />
        </div>

      /*  return <div>
            <Header/>
                <div id={"auth-container"} className={"container"} >
                    <AuthForm authClassName={"auth__login"} authFormChoicesContent={this.buildLoginFormChoicesContent( 'login' )} authTitle={"Connexion"} authAction={"Se connecter"}/>
                    <AuthForm authClassName={"auth__subscribe"} authFormChoicesContent={this.buildSubscribeFormChoicesContent( 'subscribe' )} authTitle={"Inscription"} authAction={"Sinscrire"}/>
                </div>
            <Footer />
        </div>*/

    }
}