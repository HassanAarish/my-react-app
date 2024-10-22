import Avatar from "./Avatar";
import Details from "./Detail";

function Card(Props) {
  return (
    <div className="card">
      <div className="top">
        <p>{Props.id}</p>
        <h2 className="name">{Props.name}</h2>
        <Avatar img={Props.img} />
      </div>
      <div className="bottom">
        <Details detailsInfo={Props.email} />
        <Details detailsInfo={Props.phone} />
        <Details detailsInfo={Props.relationship} />
      </div>
    </div>
  );
}

export default Card;
