import React from "react";
import Liform from "liform-react";

export default class Window extends React.Component {

    constructor( props ){
        super( props ) ;
        console.log(this.props.mainClassName);
        this.additionnalClassNames = this.props.additionnalClassNames ;
        this.mainClassName = this.props.mainClassName ;
        this.title = this.props.title ;
        this.windowContent = this.props.windowContent

    }
    render() {

        return <section id={this.mainClassName} className={"window " + this.mainClassName + "__window " + this.additionnalClassNames  }>
            <div id={this.mainClassName + "__header"} className={"label-header bottom-bordered--large "}>
                <h2>{this.title}</h2>
            </div>

            <div className={"window__main " + this.mainClassName + "__main"} id={this.mainClassName + "__main"}>
                { this.windowContent }
            </div>
        </section>

    }
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