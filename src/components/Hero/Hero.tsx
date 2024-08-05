import "./Hero.css";
import { ContentHero, NavBar } from ".";

export const Hero = () => {
  return (
    <header className="hero">
      <NavBar />
      <ContentHero />
    </header>
  );
};
export default Hero;
