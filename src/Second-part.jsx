import React from "react"; // Importing the React library
import coffeeMachineIcon from "../src/assets/images/icons8-coffee-machine.svg"; // Importing the coffee machine icon
import fridgeIcon from "../src/assets/images/icons8-fridge.svg"; // Importing the fridge icon
import coffeeBagIcon from "../src/assets/images/icons8-coffee-bag.svg"; // Importing the coffee bag icon
import chairIcon from "../src/assets/images/icons8-chair.svg"; // Importing the chair icon
import phonesImage from "../src/assets/images/phones.png"; // Importing the phones image
import portraitImage from "../src/assets/images/portrait.png"; // Importing the portrait image

function SecondPart() {
  return (
    <>
      <section className="second-part">
        <div className="container">
          <div className="main-text pt-5">
            <p>What happens in Albi's Coffee?</p>
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
        <div className="container">
          <div className="txt">
            <h1>Order</h1>
            <h2>Now</h2>
          </div>
        </div>
      </section>

      <section className="fourth-part">
        <h1>Only in Albi's Coffee</h1>
        <div className="content">
          <div className="containeer">
            {/* Individual cards representing products */}
            <div className="card">
              <div className="card__content">
                <div className="card__icon">
                  {/* SVG and image for visual representation of the product */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 350 300"
                  >
                    <path
                      id="&lt;Path&gt;"
                      className="s0"
                      d="m282.9 41.6c-34.5-17.7-68.7-54.3-113-36-44.2 18.3-62 36.8-94.1 40.5-32 3.6-82.2 21-74.9 86.8 5.6 50.2 45 75.5 76.2 84.4 31.3 8.8 48.1 44.7 90.7 40.1 35.5-3.8 64.4-35.2 82.3-52.3 32.9-31.6 78.7-34.4 91.1-68.2 11.6-31.7-23.8-77.7-58.3-95.3z"
                    />
                  </svg>
                  <img
                    src="https://assets.codepen.io/3341051/cupcake.svg"
                    alt="Cupcake Icon"
                  />
                </div>
                <div className="card__title">
                  <h3>Cupcake</h3>
                </div>
                <div className="card__descr">
                  <p>Fluffy chocolate cupcake with creamy frosting</p>
                </div>
                <div className="card__price"></div>
                <div className="card__btn-wrapper"></div>
              </div>
            </div>

            <div className="card">
              <div className="card__content">
                <div className="card__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 340 300"
                  >
                    <path
                      id="&lt;Path&gt;"
                      className="s0"
                      d="m149.2 17.4c-64-5.4-102.7-35.7-134.7 0-32 35.7-17 153.4 112.1 183.6 129.5 30.3 194.9-58.1 198.4-108.7 3.5-50.6-19.8-89.3-68-89.8-50.6-0.5-78.3 17.4-107.8 14.9z"
                    />
                  </svg>
                  <img
                    src="https://assets.codepen.io/3341051/ice-cream.svg"
                    alt="Ice Cream Icon"
                  />
                </div>
                <div className="card__title">
                  <h3>Ice Cream</h3>
                </div>
                <div className="card__descr">
                  <p>Refreshing ice cream bursting with fresh, juicy berries</p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card__content">
                <div className="card__icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 361 246"
                  >
                    <path
                      id="&lt;Path&gt;"
                      className="s0"
                      d="m157.6 0.8c-85.9 0-145.2 46.6-155.9 122.2-10.8 75.6 49.2 137.5 113.2 119.5 63.9-18.1 87.2-34.1 127-21.5 70.7 22.3 125.1-8 117.9-70.3-9.4-82.5-81.1-150-202.2-149.9z"
                    />
                  </svg>
                  <img
                    src="https://assets.codepen.io/3341051/lollipop.svg"
                    alt="Candy Icon"
                  />
                </div>
                <div className="card__title">
                  <h3>Candy Swirl</h3>
                </div>
                <div className="card__descr">
                  <p>
                    Colorful candy swirls with a delightful burst of sweetness
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="fifth-part">
        <div className="container">
          <h1>Visit Us!</h1>
          <div className="img-holder">
            <img src={phonesImage} alt="Phones Image" />
          </div>
        </div>
      </section>

      <section className="sixth-part">
        <div className="container">
          <div className="image">
            <img src={portraitImage} alt="Portrait Image" />
          </div>
          <div className="txt1">
            <p>QUALITY</p>
          </div>
          <div className="txt2">
            <p>COFFEE</p>
          </div>
        </div>
      </section>

      <section className="footer">
        <div className="container">
          <footer className="pt-5">
            <div className="row S">
              <div className="col-6 col-md-2 mb-3">
                <h5>ALBI'S COFFEE</h5>
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

              <div className="col-md-5 offset-md-1 mb-3 S">
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
                    <button className="btn btn-primary" type="button">
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
