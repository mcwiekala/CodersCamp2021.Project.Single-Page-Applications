/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function EmailJSExampleOfUse() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        // service_ID - constant value
        "service_j87z7sm",
        // templateID - variable value
        "registration_cfkiy7y",
        { customerName: "MCTeam", customerEmail: "mcteamcamp@gmail.com" },
        // user_ID - constant value
        "user_3SxlVU4j8neBWHPiOYxdt"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
}

export default EmailJSExampleOfUse;
