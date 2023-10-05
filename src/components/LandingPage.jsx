import { useState } from "react";

export default function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <div class="TopSection">
        <div class="MLSBar">
          <button class="MenuButton" onClick={() => setMenuOpen(!menuOpen)}>
            <img src="/src/assets/icons/menu.svg" class="MenuIcon" />
          </button>
          <img src="/src/assets/icons/logo.svg" class="Logo" />
          <div class="Search">
            <input type="text" class="SearchBar" />
            <button class="SearchButton">
              <img src="/src/assets/icons/search.svg" class="SearchIcon" />
            </button>
          </div>
        </div>
        <div class="NavBar">
          <ul>
            <li>Art</li>
            <li>Photography</li>
            <li>Fashion</li>
            <li>Life & Culture</li>
            <li>Music</li>
            <li>Film & TV</li>
          </ul>
        </div>
      </div>
      {menuOpen && <div id="CategoriesMenu">
        <div class="CategoryTitle">
          <p>Categories</p>
        </div>
        <div class="Menu">
          <ul>
            <li>Art</li>
            <li>Photography</li>
            <li>Fashion</li>
            <li>Life & Culture</li>
            <li>Music</li>
            <li>Film & TV</li>
          </ul>
        </div>
        <div class="SingUpMenu">
          <img src="/src/assets/icons/club-logo.svg" class="singUpLogo1" />
          <button class="login1">LOGIN</button>
          <button class="loginSingUp1">SIGN UP</button>
        </div>
      </div>
      }
      <div class="MainContent">
        <div class="HeadlineArticle">
          <img src="/src/assets/slider-images/durga-anil.jpg" class="FirstSlide" />
          <div class="ArticleText">
            <h1>Durga Anil’s abstract photographs play with light and form</h1>
            <p>
              Diam vel quam elementum pulvinar etiam. Facilisi etiam dignissim diam quis enim lobortis.
              Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam. Et malesuada fames
              ac turpis egestas. Sit amet massa vitae tortor condimentum lacinia quis vel eros.
            </p>
          </div>
        </div>
        <div class="singUp">
          <img src="/src/assets/icons/club-logo.svg" class="singUpLogo2" />
          <div class="textPlusButton">
            <p>
              Lectus magna fringilla urna porttitor rhoncus dolor purus. Mauris vitae ultricies leo integer
              malesuada nunc vel risus.
            </p>
            <div class="loginSection">
              <button class="login2">LOGIN</button>
              <button class="loginSingUp2">SIGN UP</button>
            </div>
          </div>
        </div>
        <div class="OtherNews">
          <div class="LatestText">
            <div class="LB1">
              <h1>LATEST</h1>
              <button class="LatestButton"></button>
            </div>
            <div class="LB2">
              <button class="LatestButton"></button>
            </div>
          </div>
          <div class="Article1">
            <div class="ArticleType1">
              <div class="ArticleType2"><p>ART</p></div>
              <img src="/src/assets/slider-images/liepa-petrauskas.jpg" class="ArticlePhoto1" />
            </div>
            <p>Liepa Petrauskas’ graphic work combines bold colors and minimalistic graphics</p>
          </div>
          <div class="Article1">
            <div class="ArticleType1">
              <div class="ArticleType2"><p>ARCHITECTURE</p></div>
              <img src="/src/assets/slider-images/noelene-spear.jpeg" class="ArticlePhoto1" />
            </div>
            <p>Noelene Spear’s photographs explore the architecture of Manhattan</p>
          </div>
          <div class="Article1">
            <div class="ArticleType1">
              <div class="ArticleType2"><p>LIFE & CULTURE</p></div>
              <img src="/src/assets/slider-images/jeanie-ellery.jpg" class="ArticlePhoto1" />
            </div>
            <p>We visited Jeanie Ellery’s home in Lower East Side</p>
          </div>
          <div class="Article1">
            <div class="ArticleType1">
              <div class="ArticleType2"><p>ART</p></div>
              <img src="/src/assets/slider-images/kaila-west.jpeg" class="ArticlePhoto1" />
            </div>
            <p>Discover Kaila West’s minimalistic paintings</p>
          </div>
        </div>
        <div class="clubNewsLetter">
          <img src="/src/assets/icons/Logo.svg" class="LetterLogo"></img>
          <div class="SingUpSection">
            <h1>Sign up for the Clue newsletter</h1>
            <div class="singUp2">
              <input type="text" placeholder="Your Email" />
              <button class="subscribeB">SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}