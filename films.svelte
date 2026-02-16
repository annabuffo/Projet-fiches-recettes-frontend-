
    <!-- Début de la section HEADER -->
    <header>
        <div class="nav-barre">
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
    </header>

    <!-- Fin de la section HEADER -->

    <!-- Début de la section MAIN -->

    <main>
        <div class="footer-film-strip">
            <div class="barre"></div>
        </div>

        <div class="container-searching">
            <div class="">
                <h1 class="title">🎬 Découvrez des films et des séries TV</h1>
                <P class="subtile">Recherchez un film ou une série pour créer une recette inspirée</P>
            </div>
        </div>

        <div class="section-searching">
            <div class="contrôles-searching">
                <div class="container-box">

                </div>
            </div>
        </div>
    </main>
    <!-- Début de la section MAIN -->

    <!-- Début de la section FOOTER -->

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
                <a href="https://x.com/"><img src="./img_icons_footer/twitter.png" alt="twitter"></a>
                <a href="https://www.youtube.com/"><img src="./img_icons_footer/youtube (1).png" alt="youtube"></a>
            </div>
        </div>

        <h2 class="news">Newsletter</h2>

        <form class="newsletter">
            <input type="email" placeholder="ton@email.com" required>
            <button type="submit">SUBSCRIBE</button>
        </form>

        <div class="mention-légal">
            <li>© Ciné Délices. Tous droits réservés. Expériences culinaires cinématographique.</li>
        </div>
    </footer>

    <!-- Fin de la section FOOTER -->
</body>

<style>

    * {
    background-color: black;
}


/*PARTIE HEADER*/

h1 {
    color: #d4af37;
}

.icon-clapet {
    border: 2px solid black;
}

.icon-clapet a {
    color: white;   
}

.nav-barre-home-page {
    color: white;
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: right;
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

.register {
        border: 2px solid #d4af37;
}

/*FIN HEADER*/

/*PARTIE MAIN*/

.container-search {

}


.title{
    background-color: #d4af37;
    color: black;
}

.subtile {
    color: rgb(104, 103, 103);
    background-color: #d4af37;
}


/*FIN MAIN*/

/*PARTIE FOOTER*/

.footer-film-strip {
    box-sizing: border-box;
    height: 30px; /*hauteur de la ligne*/
    background-color: #d4af37; 
    width: 100%; /*prend 100% de la largeur*/

    display: flex; /*sert à conternir les carrer noir à l'intérieur de la barre jaune*/
    justify-content: center;
    align-items: center;
}

.barre {
  width: 100em; 
  height: 14px;
  background: repeating-linear-gradient( /*sert à répéter les couleur des carrer noir*/
    90deg,
    #000 0 16px,
    #d4b000 4px 20px
  );
}


.nav-barre-from-the-bottom {
    color: white;
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
    outline: none;
    justify-content: space-between;
}

.mention-légal {
    color: white;
    text-align: center;
}

/*FIN FOOTER*/
</style>
</html>
