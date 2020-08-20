import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Footer = () => {
  const history = useHistory();

  const path = useSelector((state) => state.path);
  return (
    path && (
      <div className="footer">
        <div>All Rights Reserved CopyRights 2020</div>
      </div>
    )
  );
};

export default Footer;
