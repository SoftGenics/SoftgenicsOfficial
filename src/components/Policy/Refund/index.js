// src/pages/Refund.js
import React from "react";
import "./index.css";

export default function Refund() {
  return (
    <div className="page-container">
      <h1>Refund & Cancellation Policy</h1>

      <h2>Service Cancellation</h2>
      <p>
        You may cancel a service request within <b>24 hours</b> of placing it by
        contacting us at <b>info@softgenics.in</b>.
      </p>

      <h2>Refunds</h2>
      <ul>
        <li>
          If cancellation is made within 24 hours and before service initiation,
          you will receive a full refund.
        </li>
        <li>
          Once service has been initiated, <b>no refunds</b> will be provided.
        </li>
        <li>
          Refunds will be processed within <b>7–10 working days</b> to the
          original payment method.
        </li>
      </ul>

      <h2>Contact</h2>
      <p>
        For refund or cancellation requests, please email us at{" "}
        <b>info@softgenics.in</b>.
      </p>
    </div>
  );
}
