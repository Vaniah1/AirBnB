import star from "../img/star.png";

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="cont">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img src={`../images/${props.coverImg}`} className="card--image" />
      <div className="card--stats">
        <img src={star} className="card--star" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) • </span>
        <span className="gray">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}

import PropTypes from "prop-types";

Card.propTypes = {
  openSpots: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
  coverImg: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    rating: PropTypes.number.isRequired,
    reviewCount: PropTypes.number.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
