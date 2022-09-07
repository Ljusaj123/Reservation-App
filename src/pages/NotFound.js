import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <h1>OOPS!</h1>
      <h2>404 - ERROR NOT FOUND</h2>
      <p>
        The page you are looking for might have been removed, had it's name
        changed or does not exist
      </p>
      <Link to="/">
        <button className="button__search">Back to Homepage</button>
      </Link>
    </div>
  );
}

export default NotFound;
