function Card(Props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{Props.name}</h2>
        <img className="circle-img" src={Props.img} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{Props.phone}</p>
        <p className="info">{Props.email}</p>
        <p className="info">{Props.relationship}</p>
      </div>
    </div>
  );
}

export default Card;
