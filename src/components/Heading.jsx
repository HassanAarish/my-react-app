import React from "react";

function Heading() {
  const timeDate = new Date();
  const currentTime = timeDate.getHours(2024, 10, 21, 10);
  console.log("🚀 ~ currentTime:", currentTime);

  const headingStyle = {
    color: "",
  };

  let greeting;
  if (currentTime < 12) {
    greeting = "Good Morning !";
    headingStyle.color = "red";
  } else if (currentTime < 18) {
    greeting = "Good Evening !";
    headingStyle.color = "green";
  } else {
    greeting = "Good Night !";
    headingStyle.color = "blue";
  }

  return (
    <div>
      <h1 className="heading" style={headingStyle}>
        {greeting}
      </h1>
      <h1>My Favourite Food</h1>
    </div>
  );
}

export default Heading;
