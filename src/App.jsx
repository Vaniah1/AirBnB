// No import needed since React is not used
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Hero from "./components/Hero";
import "./index.css";
import data from "./data";
import "../src/images/katie-zaferes.png";
import "../src/images/mountain-bike.png";
import "../src/images/wedding-photography.png";

function App() {
  const cards = data.map((item, index) => {
    return (
      <Card
        key={index}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpots={item.openSpots}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
export default App;
