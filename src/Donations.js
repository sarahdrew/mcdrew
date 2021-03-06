import React from "react";

function Donations() {
  return (
    <>
      <div className="container">
        <h3 id="donations">DONATIONS</h3>
        <div className="donations-wrapper">
          <h4>
            This year, donations will go to{" "}
            <a
              style={{ textDecoration: "none" }}
              className="donation-link"
              target="_blank"
              href="https://www.wbgl.org/community-resource/st-martin-deporres-center/"
            >
              St. Martin de Porres
            </a>
          </h4>
          <p>
            Over the past several years the McDrew community has opened their
            hearts and checkbooks to support several deserving not-for-profit
            organizations in the Springfield area. We are inspired by friends
            and families who volunteer at these organizations and appreciate the
            innovative efforts of the management teams of these organizations
            who are devoted to serving our community. To date , together, we
            have provided <b>approximately $500,000.00 in financial support</b>{" "}
            to the following organizations:
          </p>
          <div className="donations-list">
            <ul>
              <li>The Outnet </li>
              <li>Mini O’Beirne Crisis Nursery </li>
              <li>St. Patrick’s School</li>
              <li>SIU Simmons Cancer Institute</li>
              <li>St. John’s Children’s Hospital</li>
              <li>Blessed Sacrament School</li>
              <li>St. Joseph’s Home</li>
              <li>Springfield YMCA </li>
              <li>St. Martin Deporres Center</li>
              <li>Lincoln Memorial Gardens </li>
              <li>Springfield Parks Foundation</li>
              <li>MERCY House</li>
              <li>Hospital Sisters Mission Outreach </li>
              <li>Boys & Girls Club</li>
              <li>Brother James Court </li>
              <li>Sacred Heart-Griffin High School</li>
              <li>Springfield Public Schools Foundation </li>
              <li>St. John’s Hospital </li>
              <li>Toast of the Town </li>
              <li>King’s Daughters </li>
              <li>Washington Park Foundation</li>
              <li>St. John’s Hospital Neurological Unit </li>
              <li>Springfield Tennis Academy </li>
              <li>HealthFirst Community Clinic</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Donations;
