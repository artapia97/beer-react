import CardStyles from "../styles/Card.module.css";
import { Link } from 'react-router-dom';

const Card = ({ beer }) => {
  const { price, name, image, id } = beer;


  return (
    <div className={CardStyles.cardContainer}>
      <Link to={`/beer/${id}`}>
        <img src={image} alt="beer-detail" />
        <h3>{name}</h3>
      </Link>
      <h4>{price}</h4>
    </div>
  );
};

export default Card;