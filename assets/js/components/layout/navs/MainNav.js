import React from "react";


export default class ManNav extends React.Component {
    render() {
        return <nav id={"main-nav"}>
            <ul>
                <a href=""><li className={ "active--banana-bumble" }>Accueil</li></a>
                <a href=""><li>Figurine</li></a>
                <a href=""><li>Prêt à porter</li></a>
            </ul>
        </nav>
    }
}
