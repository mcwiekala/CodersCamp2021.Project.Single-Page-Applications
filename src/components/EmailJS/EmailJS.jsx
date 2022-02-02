import React, { useRef } from "react";
import PropTypes from "prop-types";
import emailjs from "@emailjs/browser";

function EmailJS({ renderForm, templateID }) {
  const regForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j87z7sm",
        templateID,
        regForm.current,
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
    <form ref={regForm} onSubmit={sendEmail}>
      {renderForm()}
    </form>
  );
}
EmailJS.propTypes = {
  renderForm: PropTypes.func.isRequired,
  templateID: PropTypes.string.isRequired,
};
export default EmailJS;
