import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      A full-stack web application.{" "}
      <a
        href="https://github.com/AddyLopez/fullstack-mern-email-survey-app"
        target="_blank"
        title="To GitHub repository"
        rel="noreferrer"
      >
        Open-source code
      </a>{" "}
      by Addy López.
    </footer>
  );
};

export default Footer;
