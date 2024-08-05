import { ProductCardProps } from "../../models";
import "./ProductCard.css";
import Portacuentas from "./../../../public/assets/Portacuentas.png";

export const ProductCard = (props: ProductCardProps) => {
  const { imgSrc, altImg, title, price } = props;
  return (
    <div className="product-card">
      <img
        src={Portacuentas ?? imgSrc}
        className="product-card--img"
        alt={altImg}
      />
      <div className="product-card--content">
        <h3 className="product-card--title raleway-400">{title}</h3>
        <p className="product-card--price source-sans-3-300">Desde {price}</p>
      </div>
    </div>
  );
};
