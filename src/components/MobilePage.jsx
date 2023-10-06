import React, { useState } from "react";
import MobileArticleThumbnailMain from "./mobilecomponents/MobileArticleThumbnailMain";
import MobileClubLogin from "./mobilecomponents/MobileClubLogin";
import MobileArticleExtended from "./mobilecomponents/MobileArticleExtended";

export default function MobilePage() {
  const [isTargetVisible, setIsTargetVisible] = useState(false);

  const toggleTargetVisibility = () => {
    setIsTargetVisible(!isTargetVisible);
  };

  return (
    <article>
      <MobileArticleThumbnailMain />
      <MobileClubLogin />
      <section className="mobile-news-list">
        <h2>LATEST</h2>
        <article className="mobile-news-liepa-petrauskas mobile-news">
          <p className="mobile-news-category">ART</p>
          <img src="/src/assets/slider-images/liepa-petrauskas.jpg"></img>
          <h3>
            Liepa Petrauskas’ graphic work combines bold colors and minimalistic
            graphics
          </h3>
        </article>
        <article className="mobile-news-noelene-spear mobile-news">
          <p className="mobile-news-category">ARCHITECTURE</p>
          <img src="/src/assets/slider-images/noelene-spear.jpeg"></img>
          <h3>
            Noelene Spear’s photographs explore the architecture of Manhattan
          </h3>
        </article>
        <article className="mobile-news-jeanie-ellery mobile-news">
          <p className="mobile-news-category">LIFE & CULTURE</p>
          <img src="/src/assets/slider-images/jeanie-ellery.jpg"></img>
          <h3>We visited Jeanie Ellery’s home in Lower East Side</h3>
        </article>

        <article className="mobile-news-kaila-west mobile-news">
          <p className="mobile-news-category">ART</p>
          <img src="/src/assets/slider-images/kaila-west.jpeg"></img>
          <h3>Discover Kaila West’s minimalistic paintings</h3>
        </article>
        <button className="mobile-show-more" onClick={toggleTargetVisibility}>
          SHOW MORE
        </button>
        {isTargetVisible && <MobileArticleExtended />}
      </section>
      <div className="mobile-newsletter">
        <div className="mobile-newsletter-wrapper">
          <img src="/src/assets/icons/logo.svg"></img>
          <h3 className="mobile-newsletter-desc">
            SIGN UP FOR THE CLUE NEWSLETTER
          </h3>
        </div>
        <form>
          <input
            type="email"
            placeholder="Your email"
            className="mobile-newsletter-email"
          ></input>
          <button className="mobile-newsletter-subscribe">SUBSCRIBE</button>
        </form>
      </div>
      <footer> </footer>
    </article>
  );
}
