import React from "react";

const Service = () =>{
    return(
        <section className="services" id="services">
        <div className="heading">
            <span>Services</span>
            <h2>Nous fournissons les meilleurs services alimentaires</h2>
        </div>

        <div className="service-container">
            <div className="s-box">
                <img src="./images/order.png" alt="" />
                <h3>Vous commandez</h3>
                <p>Vous ne voulez pas quitter la maison ? Vous pouvez commander vos plats préférés avec une livraison rapide pour manger au restaurant et rester à la maison.</p>
            </div>
            <div className="s-box">
                <img src="./images/shipping.png" alt="" />
                <h3>Livré</h3>
                <p>Qualité Vous pouvez vous faire livrer pour un dollar ou même gratuitement si vous préférez rester à la maison et vous faire livrer votre repas à votre porte.</p>
            </div>
        </div>
        <div  className="service-container">
            <div className="s-box">
                <img src="./images/trust.png" alt="" />
                <h3>Confiance</h3>
                <p>Excellent service client</p>
            </div>
            <div className="s-box">
                <img src="./images/quality.png" alt="" />
                <h3>Qualité</h3>
                <p>Ingrédients de haute qualité et certifiés</p>
            </div>
            <div className="s-box">
                <img src="./images/halal.png" alt="" />
                <h3>Halal</h3>
                <p>Nourriture Halal Certifiée à 100%</p>
            </div>
        </div>
    </section>
    );
}
export default Service;