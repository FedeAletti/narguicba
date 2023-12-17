import React from "react";

import {LogoIcon} from "./icons";

export function Footer() {
  return (
    <footer className="footer text-base-content bg-black p-10">
      <aside>
        <LogoIcon />
        <p>
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </aside>
      <nav>
        <header className="footer-title">Services</header>
        <a className="link link-hover" href="google.com">
          Branding
        </a>
        <a className="link link-hover" href="google.com">
          Design
        </a>
        <a className="link link-hover" href="google.com">
          Marketing
        </a>
        <a className="link link-hover" href="google.com">
          Advertisement
        </a>
      </nav>
      <nav>
        <header className="footer-title">Company</header>
        <a className="link link-hover" href="google.com">
          About us
        </a>
        <a className="link link-hover" href="google.com">
          Contact
        </a>
        <a className="link link-hover" href="google.com">
          Jobs
        </a>
        <a className="link link-hover" href="google.com">
          Press kit
        </a>
      </nav>
      <nav>
        <header className="footer-title">Legal</header>
        <a className="link link-hover" href="google.com">
          Terms of use
        </a>
        <a className="link link-hover" href="google.com">
          Privacy policy
        </a>
        <a className="link link-hover" href="google.com">
          Cookie policy
        </a>
      </nav>
    </footer>
  );
}
