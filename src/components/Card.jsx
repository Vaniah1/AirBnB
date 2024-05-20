import PropTypes from "prop-types";
import star from "../images/star.png";
import "../images/katie-zaferes.png";
import "../images/mountain-bike.png";
import "../images/wedding-photography.png";
import "../index.css";

function Card({
  img,
  rating,
  location,
  reviewCount,
  country,
  title,
  price,
  openSpots,
}) {
  Card.propTypes = {
    img: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    reviewCount: PropTypes.number.isRequired,
    country: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    openSpots: PropTypes.number.isRequired,
  };
  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="cont">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`${img}`} className="card--image" alt={title} />
      <div className="card--stats">
        <img src={star} className="card--star" alt="star" />
        <span>{rating}</span>
        <span className="gray">({reviewCount}) • </span>
        <span className="gray">{location}</span>
        <span className="gray">{country}</span>
      </div>
      <p className="card--title">{title}</p>
      <p>
        <span className="bold">From ${price}</span> / person
      </p>
    </div>
  );
}

export default Card;
