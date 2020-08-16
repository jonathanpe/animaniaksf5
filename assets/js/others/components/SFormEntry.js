import React from "react";
import SFormTextType from "./SFormTextType";
import SFormElement from "./SFormElement";

export default class SFormEntry extends SFormElement {


    constructor( props ) {
        super(props)
        this.name = this.props.name ;
        this.fullName = this.props.fullName ;
        this.options = this.props.options ;
        this.theme = this.props.theme;
        this.type = this.props.type ;
        this.component = this.props.component;
        this.custom = this.props.custom ;
    }

    buildElement(){
        const Component = this.component ;
        return < Component options={this.props.options} fullName ={this.fullName} type={ this.props.type } custom={ this.custom }/>
    }


    render() {

        return this.buildElement()
      /* return <form id={this.mainClassName} className={"window " + this.mainClassName + "__window " + this.additionnalClassNames  }>
            <div id={this.mainClassName + "__header"} className={"label-header bottom-bordered--large "}>
                <h2>{this.title}</h2>
            </div>

            <div className={"window__main " + this.mainClassName + "__main"} id={this.mainClassName + "__main"}>
                { this.windowContent }
            </div>
        </form>*/
    }
}


