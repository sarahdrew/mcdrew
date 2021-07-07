import { Component } from "react";
import Sponsor1 from "./assets/sponsors/sponsor1.jpg";
import Sponsor2 from "./assets/sponsors/sponsor2.png";
import Sponsor3 from "./assets/sponsors/sponsor3.png";
import Sponsor4 from "./assets/sponsors/sponsor4.png";
import Sponsor5 from "./assets/sponsors/sponsor5.png";

export default class Sponsors extends Component {
  render() {
    return (
      <div className="container">
        <div style={{ margin: 20 }}>
          <h3
            style={{
              color: "#448b66",
              fontWeight: 700,
              textAlign: "center",
              fontSize: 40,
            }}
          >
            SPONSORS
          </h3>
          <p>Thank you to our sponsors.</p>
          <div className="sponsors-wrapper">
            <div className="sponsor" id="Troxell">
              <img src={Sponsor1} alt="Troxell" />
              <p>
                {" "}
                <a
                  href="https://www.troxellins.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  R.W. Troxell & Company
                </a>{" "}
              </p>
            </div>
            <div className="sponsor" id="grand-salon">
              <img src={Sponsor2} alt="Grand Salon and Spa" />
              <p>
                {" "}
                <a
                  href="https://bjgrandsalon.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Grand Salon & Spa
                </a>{" "}
              </p>
            </div>
            <div className="sponsor" id="usca">
              <img src={Sponsor3} alt="USCA" />
              <p>
                {" "}
                <a
                  href="https://uscart.com/index.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  USCA
                </a>{" "}
              </p>
            </div>
            <div className="sponsor" id="james-mcdermott">
              <img src={Sponsor4} alt="James A McDermott DDS" />
              <p>James A. McDermott</p>
            </div>
            <div className="sponsor" id="do-hair">
              <img src={Sponsor5} alt="Do Hair Care" />
              <p>
                {" "}
                <a
                  href="https://doactiveproducts.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Do Hair Care
                </a>{" "}
              </p>
            </div>
          </div>
          <p>
            If you would like to become a sponsor,{" "}
            <a
              href="mailto:kevin@kevinnmcdermott.com?subject=Sponsor McDrew 2021"
              target="_blank"
              rel="noreferrer"
            >
              send us an email
            </a>{" "}
          </p>
        </div>
      </div>
    );
  }
}
