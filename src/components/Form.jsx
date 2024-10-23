import React from "react";

function Form(Props) {
  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      {/* Both are the 2 ways to render conditionally depending on your choice. */}
      {/* This is the shortestway to render conditionally */}

      {!Props.isRegistered && (
        <input type="password" placeholder="Confirm Password" />
      )}

      {/* OR this */}

      {/* {Props.isRegistered === false && (
        <input type="password" placeholder="Confirm Password" />
      )} */}

      {/* This is a little bit of bigger but easy way to render conditionally */}

      {/* {Props.isRegistered === false ? (
        <input type="password" placeholder="Confirm Password" />
      ) : null} */}

      <button type="submit">{Props.isRegistered ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
