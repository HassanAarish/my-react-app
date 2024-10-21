function Card(Props) {
  return (
    <div className="card">
      <h2>{Props.name}</h2>
      <img src={Props.img} alt="Image" />
      <p>{Props.email}</p>
      <p>{Props.tel}</p>
    </div>
  );
}

export default Card;
