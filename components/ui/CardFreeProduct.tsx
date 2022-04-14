import { useState } from "react";
import Link from "next/link";

import { ProductData } from "../../data/types";

interface CardFreeProductProps {
  product: ProductData;
}

export const CardFreeProduct = (props: CardFreeProductProps) => {
  const { product } = props;
  const { name, imgUrl, accessUrl, inAppAccess } = product;
  const [mobileRotate, setMobileRotate] = useState<boolean>(false);

  return (
    <div className={`card ${mobileRotate ? "card--rotated" : ""}`}>
      <div className="card__side card__side--front">
        <img
          src={
            !!imgUrl
              ? `${process.env.NEXT_PUBLIC_ASSET_URL}/${imgUrl}`
              : "/card-placeholder.png"
          }
          alt={name}
          className="card__picture"
        />
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
              Acessar
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
            <p className="card__price-only">o acesso já</p>
            <p className="card__price-value">é seu</p>
          </div>
          {inAppAccess && (
            <Link href={accessUrl} passHref>
              <button className="btn btn--white">ACESSAR</button>
            </Link>
          )}
          {!inAppAccess && (
            <a href={accessUrl} target="_blank" rel="noreferrer">
              <button className="btn btn--white">ACESSAR</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
