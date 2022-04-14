import { useState } from "react";
import { ResourceData } from "../../data/types";

interface CardResourceProps {
  resource: ResourceData;
}

export const CardResource = (props: CardResourceProps) => {
  const { resource } = props;
  const { name, downloadUrl, imgUrl } = resource;
  const [mobileRotate, setMobileRotate] = useState<boolean>(false);

  return (
    <div className={`card ${mobileRotate ? "card--rotated" : ""}`}>
      <div className="card__side card__side--front">
        <img src={imgUrl} alt={name} className="card__picture" />
        <div className="card__details">
          <h4 className="card__heading">
            <span className="card__heading-span">{name}</span>
          </h4>
          <div className="card__mobile-cta-container">
            <button
              className="btn btn--small btn--yellow card__mobile-cta"
              onClick={() => {
                setMobileRotate(true);
              }}
            >
              Download
            </button>
          </div>
        </div>
      </div>
      <div className="card__side card__side--back">
        <span
          className="card__close"
          onClick={() => {
            setMobileRotate(false);
          }}
        >
          &times;
        </span>
        <div className="card__cta">
          <div className="card__price-box">
            <p className="card__price-only">Download</p>
            <p className="card__price-value">grátis</p>
          </div>
          <a
            href={downloadUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn--white"
          >
            DOWNLOAD
          </a>
        </div>
      </div>
    </div>
  );
};
