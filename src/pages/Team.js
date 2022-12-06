import React from "react";
import NavBar from '../components/NavBar';

import Footer from '../components/Footer';
const Team = () => {
    return(
        <>
            <NavBar />
                <div id="body-team">
                    <h1>Notre Équipe</h1>
                    <div className="container-team">
                        <div className="item-team">
                            <img className="item-team-img" src="https://images.unsplash.com/photo-1558138838-76294be30005?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGl6emElMjBjaGVmfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt=""/>
                            <div className="item-team-info">
                                <img className="item-team-info-img" src="./images/pizzapng1.png" alt=""/>
                                <h2>Kajetan Peck</h2>
                                <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée.</p>
                                <span>
                                    <a href="https://www.facebook.com/" target="_blank" class="fa-brands fa-facebook"></a>
                                    <a  href="https://www.instagram.com/" target="_blank" class="fa-brands fa-instagram"></a>
                                    <a href="https://twitter.com/" target="_blank" class="fa-brands fa-twitter"></a>
                                </span>
                            </div>
                        </div>

                        <div className="item-team">
                            <img className="item-team-img"  src="https://www.materiel-horeca.com/guide/wp-content/uploads/2019/01/pexels-photo-724212.jpg" alt=""/>
                            <div className="item-team-info">
                                <img  className="item-team-info-img"  src="./images/pizzapng1.png" alt=""/>
                                <h2>Kalem Perkins</h2>
                                <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée.</p>
                                <span>
                                    <a href="https://www.facebook.com/" target="_blank" class="fa-brands fa-facebook"></a>
                                    <a  href="https://www.instagram.com/" target="_blank" class="fa-brands fa-instagram"></a>
                                    <a href="https://twitter.com/" target="_blank" class="fa-brands fa-twitter"></a>
                                </span>
                            </div>
                        </div>

                        <div className="item-team">
                            <img className="item-team-img"  src="https://media01.stockfood.com/largepreviews/MzQ0NTM0MTg2/11114006-Pizza-chef-holding-pizza-in-front-of-oven.jpg" alt=""/>
                            <div className="item-team-info">
                                <img className="item-team-info-img"  src="./images/pizzapng1.png" alt=""/>
                                <h2>Brendan Wiggins</h2>
                                <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée.</p>
                                <span>
                                    <a href="https://www.facebook.com/" target="_blank" class="fa-brands fa-facebook"></a>
                                    <a  href="https://www.instagram.com/" target="_blank" class="fa-brands fa-instagram"></a>
                                    <a href="https://twitter.com/" target="_blank" class="fa-brands fa-twitter"></a>
                                </span>
                            </div>
                        </div>

                        <div className="item-team">
                            <img className="item-team-img"  src="https://media.timeout.com/images/105909301/image.jpg" alt=""/>
                            <div className="item-team-info">
                                <img className="item-team-info-img"  src="./images/pizzapng1.png" alt=""/>
                                <h2>Kajetan Peck</h2>
                                <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée.</p>
                                <span>
                                    <a href="https://www.facebook.com/" target="_blank" class="fa-brands fa-facebook"></a>
                                    <a  href="https://www.instagram.com/" target="_blank" class="fa-brands fa-instagram"></a>
                                    <a href="https://twitter.com/" target="_blank" class="fa-brands fa-twitter"></a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                
            <Footer />
        </>
    );
}

export default Team;