import React from "react";
import Header from "../../components/layout/Header";
import AuthForm from "./AuthForm";
import Footer from "../../components/layout/footer/Footer";

import "../../../scss/auth/subscribe.scss"

console.log( 'subscribe ')
export default class Subscribe extends React.Component {


    constructor(props) {
        super(props )
        console.log('subscribe')
    }

    buildSubscribeFormChoicesContent( className ){

        return <>
           <div className={"auth__"+className+"__form__field form__field --large bottom-bordered--thin floating-label"} >
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
            </div>
        </>
    }

    render() {
        return <div>
            <Header/>
            <div id={"auth-container"} className={"container"} >

                <AuthForm authClassName={"auth__subscribe"} authFormChoicesContent={this.buildSubscribeFormChoicesContent( 'subscribe' )} authTitle={"Inscription"} authAction={"Sinscrire"}/>
            </div>
            <Footer />
        </div>
    }

}
