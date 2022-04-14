import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import AddShoppingCartRoundedIcon from "@material-ui/icons/AddShoppingCartRounded";
import InfoRoundedIcon from "@material-ui/icons/InfoRounded";

import { useStoreContext } from "../../components/providers/StoreContextProvider";
import { checkProductIsInCart } from "../../util/store/checkProductIsInCart";
import { getBonusIdAndPriceDataInCart } from "../../util/store/getBonusInCart";
import { checkUnlockIsInCart } from "../../util/store/checkUnlockIsInCart";
import { addThousandSeparator } from "../../util/string/addThousandSeparator";
import { ProductData } from "../../data/types";

interface CardSaleProps {
  product: ProductData;
  owned: boolean;
  crossSell?: boolean;
  setFeedbackActive?: React.Dispatch<React.SetStateAction<boolean>>;
  setFeedbackMessage?: React.Dispatch<React.SetStateAction<string>>;
}

export const CardSale = (props: CardSaleProps) => {
  const {
    product,
    owned,
    crossSell = false,
    setFeedbackActive,
    setFeedbackMessage,
  } = props;
  const {
    frontId,
    name,
    imgUrl,
    price,
    inAppPurchase,
    inAppAccess,
    accessUrl,
    lpUrl,
    bonus,
    isUnlockedBy,
  } = product;
  const priceTxt = `R$${addThousandSeparator(Math.round(price), false, false)}`;
  const storeCtx = useStoreContext();
  const router = useRouter();
  const [mobileRotate, setMobileRotate] = useState<boolean>(false);

  const addToCartHandler = (push: boolean) => {
    if (
      !checkProductIsInCart(frontId, storeCtx.productsInCart) &&
      !checkUnlockIsInCart(isUnlockedBy, storeCtx.productsInCart) &&
      !owned
    ) {
      const bonusInCart = getBonusIdAndPriceDataInCart(
        bonus,
        storeCtx.productsInCart
      );
      if (bonusInCart.length > 0) {
        bonusInCart.forEach((bic) => {
          storeCtx.removeProductHandler(bic.frontId, bic.price);
        });
      }
      storeCtx.addProductHandler(frontId, price);
      setFeedbackMessage("Produto adicionado ao carrinho");
      setFeedbackActive(true);
    } else {
      setFeedbackMessage("Produto já está no carrinho");
      setFeedbackActive(true);
    }

    if (push) {
      router.push("/carrinho");
    }
  };

  return (
    <div
      className={`card ${crossSell ? "card--cross-sell" : ""} ${
        mobileRotate ? "card--rotated" : ""
      }`}
    >
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
            {!crossSell && (
              <p className="card__price-only">
                {owned ? "o acesso já" : "a partir de"}
              </p>
            )}
            <p className="card__price-value">{owned ? "é seu" : priceTxt}</p>
          </div>
          {owned && !inAppAccess && (
            <a
              href={accessUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn--white"
            >
              ACESSAR
            </a>
          )}
          {owned && inAppAccess && (
            <Link href={accessUrl} passHref>
              <button className="btn btn--white">ACESSAR</button>
            </Link>
          )}
          {!inAppPurchase && !owned && (
            <a
              href={lpUrl}
              target="_blank"
              rel="noreferrer"
              className={`btn btn--white ${crossSell ? "btn--small" : ""}`}
            >
              SAIBA MAIS
            </a>
          )}
          {inAppPurchase && !owned && !crossSell && (
            <button
              className="btn btn--white"
              onClick={() => {
                addToCartHandler(true);
              }}
            >
              ADQUIRA JÀ!
            </button>
          )}
          {inAppPurchase && !owned && (
            <div className="card__secondary-ctas">
              <button
                className="card__secondary-cta btn btn--white btn--icon"
                onClick={() => {
                  addToCartHandler(false);
                }}
              >
                <AddShoppingCartRoundedIcon />
              </button>
              <a
                href={lpUrl}
                target="_blank"
                rel="noreferrer"
                className="card__secondary-cta btn btn--white btn--icon"
              >
                <InfoRoundedIcon />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
