import React from "react";

import Header from "../../components/layout/Header";
import Footer from "../../components/layout/footer/Footer";
import AuthLoginForm from "./AuthLoginForm";
import Container from "../../general/components/Container";
import AuthForm from "./AuthForm";

export default class Auth extends React.Component {

    buildLoginFormChoicesContent( className ){

        return <>
            <div className={"auth__"+className+"__form__field form__field --large bottom-bordered--thin floating-label"} >
                    <input type="text" name={"auth__" + className + "__form__field__login" } className={"form__input--large label-container"} required />
                    <label className={"floating-label"} htmlFor={"auth__" + className + "__form__field__login" }>Nom d'utilisateur</label>
            </div>
            <div className={"auth__" + className + "__form__field form__field bottom-bordered--thin floating-label"} >

                <input type="text" name={"auth__" + className + "__form__field__password"} className={"form__input--large label-container"} required />
                <label className={"floating-label"} htmlFor={"auth__" + className + "__form__field__password"}>Mot de passe</label>
            </div>
            <div className={"auth__" + className + "__form__field form__field"} >
                <input type="checkbox" name={"auth__" + className + "__form__field__remember-me"} className={"form__input--large label-container"} required />
                <label htmlFor={"auth__" + className + "__form__field__password"}>Se souvenir de moi</label>
            </div>
        </>
    }
    buildSubscribeFormChoicesContent( className ){

        return <>
            <div className={"auth__"+className+"__form__field form__field --large bottom-bordered--thin floating-label"} >
                <input type="text" name={"auth__" + className + "__form__field__email" } className={"form__input--large label-container"} required />
                <label className={"floating-label"} htmlFor={"auth__" + className + "__form__field__email" + className }>Email</label>
            </div>
        </>
    }

    render() {
        return <div>
            <Header/>
                <div id={"auth-container"} className={"container"} >
                    <AuthForm authClassName={"auth__login"} authFormChoicesContent={this.buildLoginFormChoicesContent( 'login' )} authTitle={"Connexion"} authAction={"Se connecter"}/>
                    <AuthForm authClassName={"auth__subscribe"} authFormChoicesContent={this.buildSubscribeFormChoicesContent( 'subscribe' )} authTitle={"Inscription"} authAction={"Sinscrire"}/>
                </div>
            <Footer />
        </div>

    }
}