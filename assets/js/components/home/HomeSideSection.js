import React from "react";
import Product from "./Product";

var monthlyProduct = {
        name : 'Figurine Broly' ,
        visuel : 'build/images/figurine-broly.png',
        price  :  21.99,
        brand : 'Banpresto'
    }
export default class HomeSideSection extends React.Component {
    render() {
        return <section id={"home__news"} className={"block home-section"}>
            <div className={"home-section__headeer"}>
                <h2 className={"heading-title"}>Produit du jour</h2>
            </div>
            <div className={"home-section__body"}>
                      <Product product={ monthlyProduct } />
                })}
            </div>
        </section>
    }
}
