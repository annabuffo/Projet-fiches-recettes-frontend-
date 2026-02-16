  <!-- Début de la section HEADER -->
    <header>
            <div class="nav-barre">
            <h1>🎬 Ciné Délices</h1>
            <nav class="nav-barre-home-page">
                <li><a href="./index.html">ACCUEIL</a></li>
                <li><a href="./films.html">FILMS</a></li>
                <li><a href="./recettes.htm">RECETTES</a></li>
                <li><a href="./connexion.html">CONNEXION</a></li>
                <li class="register"><a href="./inscription.html">INSCRIPTION</a></li>
            </nav>
        </div>

        <div class="footer-film-strip">
            <div class="barre"></div>
        </div>
        <img src="https://img.freepik.com/premium-photo/delicious-french-ratatouille-summer-vegetables-including-eggplant-zucchini-bell-peppers-tomato_1030265-7420.jpg"
            alt="Une assiette de ratatouille">
        <h2>Ratatouille</h2>
        <h3>CHEF GUSTEAU'S RATATOUILLE</h3>

        <p><em>Une offre que vous ne pouvez pas refuser. Recréez le plat emblématique du chef-d'œuvre
                cinématographique.</em></p>

        <button class="button_form_register" type="submit">VOIR L'ASSOCIATION RECETTE ET FILM</button>
        <div class="footer-film-strip">
            <div class="barre"></div>
        </div>
    </header>

    <!-- Fin de la section HEADER -->


    <!-- Début de la section MAIN -->
    <div>

        <h2 class="section-article-home-page">
            <main>
                <div class="home-page">
                    <h2>EN ATTENTE : FONCTIONNALITES CULINAIRES</h2>

                    <div class="container">
                        <section>
                            <article class="ratatouille"><img
                                    src="/img_recette_accueil/delicious-french-ratatouille-summer-vegetables-including-eggplant-zucchini-bell-peppers-tomato_1030265-7420.avif"
                                    alt="une assiette de ratatouille">
                                <h4><em>Ratatouille</em></h4>
                                <h3>RATATOUILLE DU CHEF GUSTEAU</h3>
                                <P>admin | Chef : admin</P>
                                <button></button>
                            </article>
                        </section>

                        <section>
                            <article class="cannoli"><img
                                    src="/img_recette_accueil/vilkasss-ai-generated-9914501_640.jpg"
                                    alt="une assiette de cannoli sicilien">
                                <h4><em>Le Parrain</em></h4>
                                <h3>CANNOLI SICILIEN DU PARRAIN</h3>
                                <P>admin | Chef : admin</P>
                                <button type="submit">Click içi</button>
                            </article>
                        </section>

                        <section>
                            <article class="boeuf-bourguignon"><img src="/img_recette_accueil/R.jpg"
                                    alt="un boeuf bourguignon">
                                <h4><em>Julie et Julia</em></h4>
                                <h3>Le boeuf bourguignon</h3>
                                <P>admin | Chef : admin</P>
                                <button type="submit">Click içi</button>
                            </article>
                        </section>

                        <section>
                            <article class="poulet"><img
                                    src="/img_recette_accueil/better-call-saul-inspired-los-pollos-hermanos-chicken-recipe-1685627299.jpg"
                                    alt="une assiette de poulet pané">
                                <h4><em>Ratatouille</em></h4>
                                <h3>RATATOUILLE DU CHEF GUSTEAU</h3>
                                <P>admin | Chef : admin</P>
                                <button></button>
                            </article>
                        </section>

                    </div>
                </div>
            </main>
            <div class="footer-film-strip">
                <div class="barre"></div>
            </div>
    </div>
    <!-- Fin de la section MAIN -->

    <!-- Début de la setion FOOTER -->
    <footer>
        <div class="footer-film-strip">
            <div class="barre"></div>
        </div>

        <nav class="nav-barre-from-the-bottom">
            <ul>
                <li><a href="#">A propos</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Politiques de confidentialité</a></li>
                <li><a href="#">Condition d'utilisation</a></li>
            </ul>
        </nav>
        <div class="footer">
            <div class="social-icons">
                <a href="https://www.facebook.com/"><img src="./img_icons_footer/facebook (1).png" alt="facebook"></a>
                <a href="https://www.instagram.com/"><img src="./img_icons_footer/instagram (1).png"
                        alt="instagram"></a>
                <a href="https://x.com/"><img src="./img_icons_footer/twitter.png" alt="x"></a>
                <a href="https://www.youtube.com/"><img src="./img_icons_footer/youtube (1).png" alt="youtube"></a>
            </div>
        </div>

        <h2 class="news">Newsletters</h2>

        <form class="newsletter">
            <input type="email" placeholder="ton@email.com" required>
            <button type="submit">SUBSCRIBE</button>
        </form>

        <div class="mention-légal">
            <li>© Ciné Délices. Tous droits réservés. Expériences culinaires cinématographique.</li>
        </div>
    </footer>
    <!-- Fin de la section FOOTER -->

    

<style>

/*PARTIE PAGE ENTIERE*/

* {
    background-color: black;
    margin: 0%s;
}

/*FIN PAGE ENTIERE*/

/*PARTIE HEADER*/

h1,
h2,
h3 {
    color: #d4af37;
}

.nav-barre-home-page {
    color: white;
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: right;
    border-bottom: 2px solid #d4af37;
    position: static;
}

.nav-barre-home-page li {
    color: white;
    display: inline;
    text-align: right;
    padding: 0%;
    /*padding 0% + margin 0% + list style none : permet de supprimer les puces*/
    margin-left: 20px;
    list-style: none;
}

img {
    display: inline;
    width: 100%;
    height: 100%;
}

p {
    color: white;
}

.ratatouille {
    padding: 10em;
}

.ratatouille img {
    border: 2px solid #d4af37;
}

.cannoli {
    padding: 10em;
}

.cannoli img {
    border: 2px solid #d4af37;
}

.boeuf-bourguignon {
    padding: 10em;
}

.boeuf-bourguignon img {
    border: 2px solid #d4af37;
}

.poulet {
    padding: 10em;
}

.poulet img {
    border: 2px solid #d4af37;
}

/*FIN HEADER*/

/*PARTIE MAIN*/

.button_form_register {
    flex-direction: column;
    display: flexbox;
    background-color: #e94560;
}

/*FIN MAIN*/

/*PARTIE FOOTER*/

.footer-film-strip {
    box-sizing: border-box;
    height: 30px;
    /*hauteur de la ligne*/
    background-color: #d4af37;
    width: 100%;
    /*prend 100% de la largeur*/

    display: flex;
    /*sert à conternir les carrer noir à l'intérieur de la barre jaune*/
    justify-content: center;
    align-items: center;
}

.barre {
    width: 100em;
    height: 14px;
    background: repeating-linear-gradient(
            /*sert à répéter les couleur des carrer noir*/
            90deg,
            #000 0 16px,
            #d4b000 4px 20px);
}

nav ul li {
    display: inline;
    /* Affiche les éléments sur une seule ligne */
    margin-right: 20px;
    /* Espacement entre les liens */
}

nav ul li a {
    text-decoration: none;
    /* Supprime le soulignement */
    color: white;
}

nav ul li a:hover {
    color: white;
    /* Couleur au survol */
}

.nav-barre-from-the-bottom {
    color: white;
}

.footer {
    padding: 40px;
    text-align: center;
    color: white;
}

.social-icons a {
    width: 50px;
    height: 50px;
    border: 2px solid gold;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
}

.social-icons img {
    width: 40px;
    height: 40px;
    object-fit: contain;
}

.news {
    color: white;
    text-align: center;
}

.newsletter {
    display: flex;
    justify-content: center;
}

.newsletter input {
    padding: 16px;
    width: 260px;
    border: 2px solid #d4af37;
    background: transparent;
    color: white;
}

.mention-légal {
    color: white;
    text-align: center;
}

/*FIN FOOOTER*/
</style>