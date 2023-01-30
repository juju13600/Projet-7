import CardsContainer from "../../components/CardsContainer/CardsContainer";
import "./HomePage.css";
import Banner from "../../components/Banner/Banner";
import bannerHome from "../../assets/banner.png";
function HomePage() {
  return (
    <main className="homepage">
      <Banner
        image={bannerHome}
        text="Chez vous, partout et ailleurs"
      />
      <CardsContainer />
    </main>
  );
}

export default HomePage;
  