import "./App.css";
import Hero from "./components/Hero/Hero";
import { ProductsLanding } from "./components/ProductsLanding";
import { ProductCardProps } from "./models";

const sampleCards: ProductCardProps[] = [
  {
    imgSrc: "https://example.com/image1.jpg",
    altImg: "Portacuentas de madera con NFC",
    title: "Portacuentas de madera con NFC",
    price: 29.99,
  },
  {
    imgSrc: "https://example.com/image2.jpg",
    altImg: "Portacuentas de madera con NFC",
    title: "Portacuentas de madera con NFC",
    price: 29.99,
  },
  {
    imgSrc: "https://example.com/image3.jpg",
    altImg: "Portacuentas de madera con NFC",
    title: "Portacuentas de madera con NFC",
    price: 29.99,
  },
];
function App() {
  return (
    <>
      <Hero />
      <ProductsLanding cards={sampleCards} />
    </>
  );
}

export default App;
