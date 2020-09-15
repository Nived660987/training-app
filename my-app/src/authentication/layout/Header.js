import React from "react";
import { Link } from "react-router-dom";
import AuthOptions from "../auth/AuthOptions";
import "../misc/ErrorNotice.css";

export default function Header() {
  return (
    <header id="iheader">
      <div className="Header_left">
      <Link to="/">
        <h1 className="ilogo">Get-Fit</h1>
      </Link>
      </div>
      <div className="auth">
      <AuthOptions />
      </div>
    </header>
  );
}
