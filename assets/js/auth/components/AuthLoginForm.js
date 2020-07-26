import React from "react";
//import "../../../scss/auth/auth.scss"

export default class AuthLoginForm extends React.Component {
    render() {
       return <section id={"auth__login"} className={"auth__window"}>
            <div id={"auth__login__header"} className={"label-header bottom-bordered--large--red --red "}>
                <h2>Connexion</h2>
            </div>
            <div id={"auth__main"}>
                <form className={"auth__login__form"}>
                    <div className={"auth__login__form__choices"}>
                        <div className={"auth__login__form__field form__field --large bottom-bordered--thin--red floating-label"} >
                                <input type="text" name={"auth__login__form__field__login"} className={"form__input--large label-container"} required />
                                <label className={"floating-label"} htmlFor={"auth__login__form__field__login"}>Nom d'utilisateur</label>

                        </div>
                        <div className={"auth__login__form__field form__field bottom-bordered--thin--red floating-label"} >

                                <input type="text" name={"auth__login__form__field__password"} className={"form__input--large label-container"} required />
                                <label className={"floating-label"} htmlFor={"auth__login__form__field__password"}>Mot de passe</label>
                        </div>
                        <div className={"auth__login__form__field form__field"} >
                                <input type="checkbox" name={"auth__login__form__field__remember-me"} className={"form__input--large label-container"} required />
                                <label htmlFor={"auth__login__form__field__password"}>Se souvenir de moi</label>
                        </div>
                    </div>
                    <button className={"auth__login__form__comfirm btn--classic--black"}> Se connecter</button>
                </form>
            </div>
        </section>

    }
}