const LinkCard = (props) => {
  return (
    <div className="col-9 bg-dark align-items-center m-4">
      <a
        href={props.url}
        className="card-link text-white"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="py-2"
          src={props.image}
          alt="Card image cap"
          style={{ width: 100 + "%" }}
        />
      </a>
      <div className="card-body">
        <p className="card-text">{props.description}</p>
      </div>
    </div>
  );
};

export default LinkCard;
