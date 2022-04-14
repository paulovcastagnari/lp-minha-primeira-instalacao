import { useState } from "react";
import Link from "next/link";

import { ProductData } from "../../data/types";

interface CardBonusProps {
  product: ProductData;
  owned: boolean;
  unlocker: string;
}

export const CardBonus = (props: CardBonusProps) => {
  const { product, owned, unlocker } = props;
  const { name, imgUrl, accessUrl, inAppAccess, lpUrl } = product;
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
              {owned ? "Acessar" : "Veja mais"}
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
            <p className="card__price-only">
              {owned ? "o acesso já" : "destrava ao adquirir o"}
            </p>
            {!owned && <p className="card__price-only">{unlocker}</p>}
            <p className="card__price-value">{owned ? "é seu" : "bônus"}</p>
          </div>
          {owned && inAppAccess && (
            <Link href={accessUrl} passHref>
              <button className="btn btn--white">ACESSAR</button>
            </Link>
          )}
          {owned && !inAppAccess && (
            <a href={accessUrl} target="_blank" rel="noreferrer">
              <button className="btn btn--white">ACESSAR</button>
            </a>
          )}
          {!owned && (
            <a
              href={lpUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn--white"
            >
              SAIBA MAIS
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
