import { ProductCardProps } from "../../models";
import { ProductCard } from "./ProductCard";
import "./ProductsLanding.css";

interface ProductsLandingProps {
  cards: ProductCardProps[];
}

export const ProductsLanding = ({ cards }: ProductsLandingProps) => {
  return (
    <section className="products-landing">
      <h2 className="products-landing-tittle kodchasan-extralight">
        NFC'S INTEGRADOS MÁS VENDIDOS:
      </h2>
      <div className="prodcuts-landing-cards">
        {cards.map((card, index) => (
          <ProductCard
            key={card.title.concat(index.toString())}
            imgSrc={card.imgSrc}
            altImg={card.altImg}
            title={card.title}
            price={card.price}
          />
        ))}
      </div>
    </section>
  );
};
export default ProductsLanding;
