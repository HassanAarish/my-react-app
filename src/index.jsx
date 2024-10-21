import React from "react";
import ReactDOM from "react-dom";

const name = "Horror";
const currentDate = new Date();
const year = currentDate.getFullYear();
console.log("🚀 ~ currentDate:", currentDate);
const img = "https://picsum.photos/200";

const customStyle = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black",
  borderRadius: "8px",
  textAlign: "center",
};

const timeDate = new Date();
const currentTime = timeDate.getHours(2024, 10, 21, 10);
console.log("🚀 ~ currentTime:", currentTime);
let greeting;

const headingStyle = {
  color: "",
};

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

const dayDate = new Date();
const currentDay = dayDate.getDay();
console.log("🚀 ~ currentDay:", currentDay);
let day;

const heading2Style = {
  color: "",
};

if (currentDay === 1) {
  day = "Monday !";
  heading2Style.color = "red";
} else if (currentDay === 2) {
  day = "Tuesday !";
  heading2Style.color = "green";
} else if (currentDay === 3) {
  day = "Wednesday !";
  heading2Style.color = "blue";
} else {
  day = "Other Days !";
  heading2Style.color = "black";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={headingStyle}>
      {greeting}
    </h1>
    <h1 className="heading" style={heading2Style}>
      {day}
    </h1>
    <h1 className="heading">My Favourite Food</h1>
    <h1 className="heading" style={customStyle}>
      My Favourite Food
    </h1>
    <div>
      <img
        className="food-image"
        src="https://www.kitchensanctuary.com/wp-content/uploads/2024/03/Stir-Fried-Noodles-with-Beansprouts-square-FS.jpg"
        alt="Noodles"
      />
      <img
        className="food-image"
        src="https://pinchofyum.com/wp-content/uploads/Gochujang-Noodles-3-Square.jpg"
        alt="Noodles"
      />
      <img
        className="food-image"
        src="https://i.ytimg.com/vi/8gyWv9tyzcI/maxresdefault.jpg"
        alt="Noodles"
      />
      <img className="food-image" src={`${img}?grayscale`} alt="Noodles" />
    </div>
  </div>,
  document.getElementById("root")
);
