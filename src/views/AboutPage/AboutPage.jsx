import "./AboutPage.css";
import Collapse from "../../components/Collapse/Collapse";
import banner from "../../assets/banner_for_about.png";
import Banner from "../../components/Banner/Banner";

function AboutPage({ data }) {
  return (
    <div className="about-page">
      <Banner className="banner-about" image={banner} />
      <div className="container_collapse">
        {data.map((item) => (
          <Collapse
            titre={item.title}
            key={item.id}
            description={item.content}
          ></Collapse>
        ))}
      </div>
    </div>
  );
}

export default AboutPage;
