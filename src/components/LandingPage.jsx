export default function LandingPage() {
  return (
    <div>
      <nav class="TopBar">
        <div class="MLSBar">
          <button class="MenuButton">
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
      </nav>

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
        <p>
          Lectus magna fringilla urna porttitor rhoncus dolor purus. Mauris vitae ultricies leo integer
          malesuada nunc vel risus.
        </p>
        <button>LOGIN</button>
        <button>SIGN UP</button>
      </div>
    </div>
  );
}