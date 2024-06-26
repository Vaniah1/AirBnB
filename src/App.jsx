// No import needed since React is not used
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Hero from "./components/Hero";
import "./index.css";
import data from "./data";
function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} items {...item} />;
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
