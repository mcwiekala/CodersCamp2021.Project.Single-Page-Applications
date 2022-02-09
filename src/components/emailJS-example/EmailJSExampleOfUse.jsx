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
        form.current,
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

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="customerName" />
      <label>Email</label>
      <input type="email" name="customerEmail" />
      <label>Password</label>
      <input type="password" name="customerPassword" />
      <label>Repeat Password</label>
      <input type="password" name="customerPassword" />
      <input type="submit" value="Send" />
    </form>
  );
}

export default EmailJSExampleOfUse;
