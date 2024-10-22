import React from "react";
import Avatar from "./Avatar";

function Note(Props) {
  return (
    <div className="note">
      <h1>{Props.title}</h1>
      <p>{Props.content}</p>
      <Avatar img="https://picsum.photos/200" />
    </div>
  );
}

export default Note;
