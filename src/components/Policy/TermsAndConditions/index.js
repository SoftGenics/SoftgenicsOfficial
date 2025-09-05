// src/pages/Terms.js
import React from "react";
import "./index.css";

export default function Terms() {
  return (
    <div className="page-container">
      <h1>Terms & Conditions</h1>
      <p>Welcome to Softgenics!</p>
      <p>
        By accessing or using our website <b>www.softgenics.in</b>, you agree to
        comply with and be bound by these Terms & Conditions.
      </p>

      <h2>General</h2>
      <ul>
        <li>This website is owned and operated by Softgenics.</li>
        <li>We reserve the right to modify or update these Terms at any time.</li>
      </ul>

      <h2>Services</h2>
      <p>
        We provide software development, IT consulting, and related services.
        All services are subject to availability and may be modified or discontinued.
      </p>

      <h2>Payments</h2>
      <p>All payments must be made in advance through approved payment gateways.</p>

      <h2>Governing Law</h2>
      <p>
        These Terms are governed by the laws of India. Disputes, if any, will be
        subject to Patna jurisdiction.
      </p>

      <p>
        For queries, contact us at <b>info@softgenics.in</b>
      </p>
    </div>
  );
}
