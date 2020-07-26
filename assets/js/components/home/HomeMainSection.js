import React from "react";
import Product from "./Product";

let products = [
    {
        name : 'Figurine trunks super Sayan' ,
        visuel : 'build/images/figurine-trunks-super-saiyan.png',
        price  :  23.99,
        brand : 'Banpresto'
    },
    {
        name : 'Figurine Broly' ,
        visuel : 'build/images/figurine-broly.png',
        price  :  21.99,
        brand : 'Banpresto'
    },
    {
        name : 'Figurine Shoto' ,
        visuel : 'build/images/figurine-shoto.png',
        price  :  13.99,
        brand : 'Banpresto'
    },
    {
        name : 'Figurine Mikasa' ,
        visuel : 'build/images/figurine-mikasa.png',
        price  :  31.99,
        brand : 'Banpresto'
    },
    {
        name : 'Figurine Naruto' ,
        visuel : 'build/images/naruto-figure.png',
        price  :  17.99,
        brand : 'Banpresto'
    },
] ;
export default class HomeMainSection extends React.Component {
    render() {
        return <section id={"home__news"} className={"block home-section"}>
            <div className={"home-section__headeer"}>
                <h2 className={"heading-title"}>{ this.props.title }</h2>
            </div>
            <div className={"home-section__body"}>
                { products.map(( product, i) => {
                    console.log("Entered");
                    // Return the element. Also pass key
                    return ( <Product key={ i } product={ product } /> )
                })}
            </div>
        </section>
    }
}
