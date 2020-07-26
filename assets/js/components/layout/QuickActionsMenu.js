import React from "react";


export default class QuickActionsMenu extends React.Component {
    render() {
        return <div id={"main-panel__quick-actions-menu"}>
            <button id={"main-panel__quick-actions-menu__connect"}><span>Se connecter</span></button>
            <button id={"main-panel__quick-actions-menu__cart"}><span>Pannier</span></button>
        </div>
    }
}
