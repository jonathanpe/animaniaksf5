import React from "react";


export default class SearchBar extends React.Component {
    render() {
        return <div id={"main-panel__search-bar"}>
            <input id={"main_panel__search-bar__input"} />
            <button class="comfirm" id={"main_panel__search-bar__search"}><i className="fal fa-search"></i></button>
        </div>
    }
}
