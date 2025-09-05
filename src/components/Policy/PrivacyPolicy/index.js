// src/pages/Privacy.js
import React from "react";
import "./index.css";

export default function Privacy() {
  return (
    <div className="page-container">
      <h1>Privacy Policy</h1>
      <p>
        Softgenics ("we", "our", "us") values your privacy and is committed to
        protecting your personal information.
      </p>

      <h2>Information We Collect</h2>
      <ul>
        <li>
          Personal details like name, email, and phone number when you contact
          us or use our services.
        </li>
        <li>Technical details like IP address, browser, and cookies.</li>
      </ul>

      <h2>How We Use Information</h2>
      <ul>
        <li>To provide and improve our services.</li>
        <li>To communicate with you regarding updates or offers.</li>
        <li>To comply with legal requirements.</li>
      </ul>

      <h2>Data Security</h2>
      <p>
        We use industry-standard security measures to protect your data. However,
        no method of transmission over the Internet is 100% secure.
      </p>

      <h2>Third-Party Disclosure</h2>
      <p>We do not sell or trade your personal data to outside parties.</p>

      <h2>Contact</h2>
      <p>
        For privacy-related concerns, contact us at <b>info@softgenics.in</b>.
      </p>
    </div>
  );
}
