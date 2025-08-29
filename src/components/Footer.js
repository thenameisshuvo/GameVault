import React from "react";

const Footer = () => (
  <footer
    style={{
      textAlign: "right",
      padding: 5,
      background: "transparent",
      marginTop: 32,
    }}
  >
    <small>&copy; {new Date().getFullYear()} GameVault</small>
  </footer>
);

export default Footer;
