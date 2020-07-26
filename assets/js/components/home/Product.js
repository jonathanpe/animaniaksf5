import React from "react";


export default class Product extends React.Component {

    constructor(props) {
        super(props);
        console.log(this.props)

    }

    render() {

        let { name, visuel, price, brand } = this.props.product ;

        return <article className={"product"}>
                    <div className={"product__content "}>
                        <div className={"product__content__quick-menu"}><button class={"product__content__quick-menu__quick-view"}></button><button class={"product__content__quick-menu__wish-list"}></button></div>
                        <div class="product__content__visuel" style={{ backgroundImage: "url("+  visuel  +")"}}></div>
                    </div>
                    <div className={"product__label"}>
                        <div className={"product__label__details"}>
                            <h3>{ name }</h3>
                            <span className={"product__label__details__brand"}>{ brand }</span>
                            <div className={"product__label__details__prices"}>
                                <span>{ price }€</span>
                            </div>
                        </div>
                        <div className={"product__label__add-cart"}>
                            <button>Ajouter au panier</button>
                        </div>
                    </div>
                </article>
    }
}
