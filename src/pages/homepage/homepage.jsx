import React from "react";
import "./homepage.scss";
import { Directory } from "../../components/directory/directory";

export const HomePage = () => (
  <div className="homepage">
    <div className="directory-name">
      <Directory />
    </div>
  </div>
);
