export default function LandingPage() {
  return (
    <div>
      <div class="TopSection">
        <div class="MLSBar">
          <script src="/src/MenuOnOff.js"></script>
          <button class="MenuButton" onclick="switchOn()">
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
      <div id="CategoriesMenu">
        <div>
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
            <img src="/src/assets/icons/club-logo.svg" />
            <button>LOGIN</button>
            <button>SIGN UP</button>
        </div>
      </div>
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
          <img src="/src/assets/icons/club-logo.svg" class="singUpLogo" />
          <div class="textPlusButton">
            <p>
              Lectus magna fringilla urna porttitor rhoncus dolor purus. Mauris vitae ultricies leo integer
              malesuada nunc vel risus.
            </p>
            <button class="login">LOGIN</button>
            <button class="login">SIGN UP</button>
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
              <div class="ArticleType2">ART</div>
              <img src="/src/assets/slider-images/liepa-petrauskas.jpg" class="ArticlePhoto1" />
            </div>
            <p>Liepa Petrauskas’ graphic work combines bold colors and minimalistic graphics</p>
          </div>
          <div class="Article1">
            <div class="ArticleType1">
              <div class="ArticleType2">ART</div>
              <img src="/src/assets/slider-images/liepa-petrauskas.jpg" class="ArticlePhoto1" />
            </div>
            <p>Liepa Petrauskas’ graphic work combines bold colors and minimalistic graphics</p>
          </div>
          <div class="Article1">
            <div class="ArticleType1">
              <div class="ArticleType2">ART</div>
              <img src="/src/assets/slider-images/liepa-petrauskas.jpg" class="ArticlePhoto1" />
            </div>
            <p>Liepa Petrauskas’ graphic work combines bold colors and minimalistic graphics</p>
          </div>
          <div class="Article1">
            <div class="ArticleType1">
              <div class="ArticleType2">ART</div>
              <img src="/src/assets/slider-images/liepa-petrauskas.jpg" class="ArticlePhoto1" />
            </div>
            <p>Liepa Petrauskas’ graphic work combines bold colors and minimalistic graphics</p>
          </div>
        </div>
        <div class="clubNewsLetter">
          <img src="/src/assets/icons/Logo.svg" class="LetterLogo"></img>
          <div class="SingUpSection">
            <h1>Sign up for the Clue newsletter</h1>
            <div class="singUp2">
              <input type="text" placeholder="Your Email" />
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}