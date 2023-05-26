import React from "react";
import "./Loader.css";

export default function Loader({ isLargeRow, index }) {
  return (
    <div key={index} className={`${isLargeRow ? "loaderLarge" : "loader"}`}>
      <div
        className="loader__card"
        style={{ width: isLargeRow ? "167px" : "178px" }}
      >
        <img
          className="loaderImg"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Netflix_2015_N_logo.svg"
          alt=""
        />
      </div>
    </div>
  );
}
