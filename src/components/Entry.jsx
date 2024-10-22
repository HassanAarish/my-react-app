import React from "react";

function Entry(Props) {
  return (
    <div className="term">
      <dt>
        {Props.id}
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {Props.emoji}
        </span>
        <span>{Props.name}</span>
      </dt>
      <dd>{Props.description}</dd>
    </div>
  );
}

export default Entry;
