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

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Food</h1>
    <h1 style={customStyle}>My Favourite Food</h1>
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
