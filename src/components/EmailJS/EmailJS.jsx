import React, { useRef } from "react";
import PropTypes from "prop-types";
import emailjs from "@emailjs/browser";
import { SERVICE_ID, USER_ID } from "../../const";

function EmailJS({ renderForm, templateID }) {
  const regForm = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, templateID, regForm.current, USER_ID).then(
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
