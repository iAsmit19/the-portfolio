"use client";

import Image from "next/image";
import Snowfall from "react-snowfall";

const Home = () => {
  return (
    <div className="coming-soon-page-root">
      <Snowfall />

      <Image
        className="background-gradient"
        src="assets/images/coming_soon_background.svg"
        alt=""
        fill
        priority
        draggable={false}
      />
      <div className="coming-soon-page-wrapper">
        <header className="coming-soon-page-header">
          <Image
            className="header-logo"
            src="assets/images/logo/asmit_logo.svg"
            alt=""
            height={36}
            width={36}
          />
        </header>
        <main className="coming-soon-page-body">
          <div className="c-s-page-panel-left">
            <div className="coming-soon-heading">
              <h1>
                Coming <br /> Soon
                <Image
                  className="infinite-sign"
                  src="assets/images/infinite_sign.svg"
                  alt=""
                  height={26}
                  width={26}
                  draggable={false}
                />
              </h1>
            </div>
            <div className="stage-index">
              <div className="s-i-heading">
                <h3>Current Stage</h3>
              </div>
              <div className="s-i-stage-list">
                <ul>
                  <li className="active-stage">Planning</li>
                  <li className="inactive-stage">Design</li>
                  <li className="inactive-stage">Code</li>
                  <li className="inactive-stage">Release</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="c-s-page-panel-right">
            <div className="about-me">
              <div className="about-me-heading">
                <h2>I'm Asmit Singh</h2>
              </div>
              <div className="about-me-text">
                <p>
                  I'm a UI/UX Designer; Evolving towards Product <br /> Design.
                  Into creating Functional UI's & Micro <br /> Interactions.
                  Currently learning the Video & <br /> Motion Design along with
                  other Design <br /> Concepts.
                </p>
              </div>
            </div>
            <div className="contact-me">
              <div className="contact-me-heading">
                <h3>Contact via mail</h3>
              </div>
              <div className="c-m-mail-contact">
                <a href="mailto:iamasmit1919@gmail.com">
                  <Image
                    className="mail-icon"
                    src="assets/images/email-arrow.svg"
                    alt=""
                    height={16}
                    width={16}
                  />
                  iamasmit1919@gmail.com
                </a>
              </div>
              <div className="c-m-action-label">
                <p>Opens your mail app ^</p>
              </div>
            </div>
            <div className="social-icons">
              <div className="s-i-socials-heading">
                <h3>Socials</h3>
              </div>
              <div className="s-i-social-link-tags">
                <a href="javascript:void(0)" className="social-link-tag">
                  <Image
                    className="social-icon"
                    src="assets/images/behance-icon.svg"
                    alt=""
                    height={36}
                    width={36}
                    draggable={false}
                  />
                </a>
                <a href="javascript:void(0)" className="social-link-tag">
                  <Image
                    className="social-icon"
                    src="assets/images/linkedin-icon.svg"
                    alt=""
                    height={36}
                    width={36}
                    draggable={false}
                  />
                </a>
                <a href="javascript:void(0)" className="social-link-tag">
                  <Image
                    className="social-icon"
                    src="assets/images/x-twitter-icon.svg"
                    alt=""
                    height={36}
                    width={36}
                    draggable={false}
                  />
                </a>
              </div>
            </div>
          </div>
        </main>
        <footer className="coming-soon-page-footer">
          <div className="footer-heading">
            <h4>
              <Image
                className="header-logo"
                src="assets/images/logo/asmit_logo.svg"
                alt=""
                height={16}
                width={16}
              />
              Asmit's Portfolio
            </h4>
          </div>
          <div className="copyright-text">
            <p>Copyright © 2026 Asmit Singh. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Home;
