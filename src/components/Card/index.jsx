import "./style.css";

import CardImage from "../../images/image-equilibrium.jpg";

import { ReactComponent as ViewIcon } from "../../images/icon-view.svg";
import { ReactComponent as CryptoIcon } from "../../images/icon-ethereum.svg";
import { ReactComponent as ClockIcon } from "../../images/icon-clock.svg";

import CreatorIcon from "../../images/image-avatar.png";

const Card = (props) => {
  const { title, description, quantity, daysLeft, author } = props;

  return (
    <div className="card">
      <div className="card-header">
        <img src={CardImage} alt="" />
        <div className="card-header-highlight hidden">{<ViewIcon />}</div>
      </div>
      <div className="card-body">
        <p className="card-title">{title}</p>
        <p className="card-description">{description}</p>
      </div>
      <div className="card-footer">
        <div className="card-details">
          <p className="quantity">
            <span>{<CryptoIcon />}</span>
            {quantity}
          </p>
          <p className="days-left">
            <span>{<ClockIcon />}</span>
            {daysLeft}
          </p>
        </div>
        <div className="card-divider"></div>
        <div class="card-creator">
          <div className="creator-icon">
            <img src={CreatorIcon} alt="" />
          </div>
          <p className="creator-name">
            Creation of <span className="highlight">{author}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
