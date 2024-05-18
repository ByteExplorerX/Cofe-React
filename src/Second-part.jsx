import React from "react"; // Importing the React library
import coffeeMachineIcon from "../src/assets/images/icons8-coffee-machine.svg"; // Importing the coffee machine icon
import fridgeIcon from "../src/assets/images/icons8-fridge.svg"; // Importing the fridge icon
import coffeeBagIcon from "../src/assets/images/icons8-coffee-bag.svg"; // Importing the coffee bag icon
import chairIcon from "../src/assets/images/icons8-chair.svg"; // Importing the chair icon
import portraitImage from "../src/assets/images/portrait.png";
import sign from "../src/assets/images/order.png";
import poster from "../src/assets/images/poster.webp";
import poster1 from "../src/assets/images/poster1.webp";
import poster2 from "../src/assets/images/poster2.webp";
import video_menu from "../src/assets/images/menu.mp4";
import menu_mobile from "../src/assets/images/menu-mobile.mp4";


function SecondPart() {
  return (
    <>
      <section className="second-part">
        <div className="container">
          <div className="main-text pt-10">
            <p>What happens in Juri's Coffee?</p>
            <h1>Every sip is a journey, and every cup tells a story.</h1>
            <div className="bottom-border"></div>

            <div className="icons">
              <div className="first">
                <img
                  src={coffeeMachineIcon}
                  style={{ height: "28vh", marginTop: "-4vh" }}
                  alt="Coffee Machine Icon"
                />
                <p>Variety</p>
              </div>
              <div className="second">
                <img src={fridgeIcon} alt="Fridge Icon" />
                <p>Quality</p>
              </div>
              <div className="third">
                <img src={coffeeBagIcon} alt="Coffee Bag Icon" />
                <p>Fast Service</p>
              </div>
              <div className="fourth">
                <img src={chairIcon} alt="Chair Icon" />
                <p>Everywhere Near You</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="third-part">
        <div className="posters">
        <img
                  src={poster}
                  alt="Coffee Poster"
        />

<img
                  src={poster1}
                  alt="Coffee Poster1"
        />

<img
                  src={poster2}
                  alt="Coffee Poster2"
        />
        </div>
      </section>

      <section className="fourth-part">
        <img
                  src={sign}
                  alt="Coffee Machine Icon"
                />
      </section>

    <section className="video-menu">
      <div className="vd">
        
      <video className="vd-menu" autoPlay loop muted playsInline controls={false}>
        <source src={video_menu} type="video/mp4" />
      </video>

      <video className="vd-menu-mobile" autoPlay loop muted playsInline controls={false}>
        <source src={menu_mobile} type="video/mp4" />
      </video>

      </div>
    </section>

      <section className="sixth-part">
          <div className="image">
            <img src={portraitImage} alt="Portrait Image" />
          </div>
          <div className="txt1">
            <p>QUALITY</p>
          </div>
          <div className="txt2">
            <p>COFFEE</p>
          </div>
      </section>

      <section className="footer">
        <div className="container">
          <footer className="pt-5">
            <div className="row S">
              <div className="col-6 col-md-2 mb-3">
                <h5>JURI'S COFFEE</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      Home
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      Features
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      FAQs
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-white">
                      About
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-5 offset-md-1 mb-3">
                <form>
                  <h5>Subscribe to our newsletter</h5>
                  <p>Monthly digest of what's new and exciting from us.</p>
                  <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                    <label htmlFor="newsletter1" className="visually-hidden">
                      Email address
                    </label>
                    <input
                      id="newsletter1"
                      type="text"
                      className="form-control"
                      placeholder="Email address"
                    />
                    <button className="btn btn-outline-light" type="button">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="d-flex flex-column flex-sm-row justify-content-between pt-4 my-4 border-top">
              <p>© 2024 Created by <a href="https://www.linkedin.com/in/juri-dedej/">Juri Dedej</a>. All rights reserved.</p>
              <ul className="list-unstyled d-flex">
                <li className="ms-3">
                  <a className="link-dark" href="#">
                    <svg className="bi" width="24" height="24">
                      <use xlinkHref="#twitter"></use>
                    </svg>
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="#">
<svg className="bi" width="24" height="24">
<use xlinkHref="#instagram"></use>
</svg>
</a>
</li>
<li className="ms-3">
<a className="link-dark" href="#">
<svg className="bi" width="24" height="24">
<use xlinkHref="#facebook"></use>
</svg>
</a>
</li>
</ul>
</div>
</footer>
</div>
</section>
</>
);
}

export default SecondPart; // Exporting the SecondPart component as the default export
